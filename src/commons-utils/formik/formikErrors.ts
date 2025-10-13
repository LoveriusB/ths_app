/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { FormikErrors, getIn, setIn } from 'formik';

type MultiStrategy = 'first' | 'join' | 'array';

/**
 * Convertit une Yup.ValidationError -> FormikErrors<T>
 * - combine: que faire s'il y a plusieurs messages sur le même champ
 * - prefix: préfixer les paths (ex: "joueurs[2]") si tu valides un sous-objet
 */

export const yupToFormikErrors = <T>(
  err: Yup.ValidationError,
  {
    combine = 'first',
    prefix,
  }: { combine?: MultiStrategy; prefix?: string } = {}
): FormikErrors<T> => {
  const out: FormikErrors<T> = {} as any;

  const put = (rawPath: string | undefined | null, message: string) => {
    const path = (rawPath ?? '_form').trim();
    const fullPath = prefix ? `${prefix}.${path}` : path;

    (setIn as any)({}, fullPath, undefined); // noop to normalize path
    // On va lire la valeur existante en parcourant l'objet
    const segments = fullPath
      .replace(/\[(\d+)\]/g, '.$1')
      .split('.')
      .filter(Boolean);

    let cursor: any = out;
    for (let i = 0; i < segments.length - 1; i++) {
      const k = segments[i];
      cursor[k] ??= /^\d+$/.test(segments[i + 1]) ? [] : {};
      cursor = cursor[k];
    }
    const last = segments[segments.length - 1];
    const prev = cursor[last];

    if (prev === undefined) {
      cursor[last] =
        combine === 'array'
          ? [message]
          : combine === 'join'
          ? message
          : message;
    } else {
      // déjà quelque chose au même path
      if (Array.isArray(prev)) {
        cursor[last] = [...prev, message];
      } else if (typeof prev === 'string') {
        if (combine === 'first') {
          // on garde le premier
          cursor[last] = prev;
        } else if (combine === 'join') {
          cursor[last] = `${prev}\n${message}`;
        } else {
          cursor[last] = [prev, message];
        }
      } else {
        // structure inattendue -> on force en tableau
        cursor[last] = [message];
      }
    }
  };

  if (err.inner && err.inner.length > 0) {
    for (const e of err.inner) {
      if (e.message) put(e.path, e.message);
    }
  } else {
    put(err.path, err.message);
  }

  return out;
};

export const validatePathWithMapper = async <T>({
  schema,
  path, // ex: "joueurs[2].lastName"
  nextValues, // valeurs à jour (voir setIn dans le handler)
  setFieldError,
  combine = 'join' as 'first' | 'join' | 'array',
}: {
  schema: Yup.AnySchema;
  path: string;
  nextValues: T;
  setFieldError: (field: string, msg?: string) => void;
  combine?: 'first' | 'join' | 'array';
}) => {
  try {
    // plusieurs messages possibles -> pas d'arrêt anticipé
    await (schema as any).validateAt(path, nextValues, { abortEarly: false });
    setFieldError(path, undefined);
  } catch (e) {
    if (e instanceof Yup.ValidationError) {
      // Map complet -> on n’extrait que le champ demandé
      const mapped = yupToFormikErrors<T>(e, { combine });
      const fieldErr = getIn(mapped as any, path);

      if (fieldErr == null) {
        // aucune erreur pour ce path précis (au cas où Yup remonte un sous-path)
        setFieldError(path, undefined);
      } else if (Array.isArray(fieldErr)) {
        setFieldError(
          path,
          combine === 'array' ? fieldErr.join('\n') : fieldErr.join('\n')
        );
      } else {
        setFieldError(path, String(fieldErr));
      }
    } else {
      throw e;
    }
  }
};
