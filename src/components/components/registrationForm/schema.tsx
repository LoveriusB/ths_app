import * as Yup from 'yup';

const nameRegex = /^[\p{L}]+(?:-[\p{L}]+)*$/u;
// ex. OK: "Michou_03", "Michou 03", "Michou-03", "03_Michou"
// ex. NOK: "@Michou", "Michou__03", "Michou_03!!!!!!", "Michou-"
const callSignAndTeamRegex = /^(?:[\p{L}\d]+(?:[ _-][\p{L}\d]+)*)$/u;

const MAX_PLAYERS = 6;
const MIN_PLAYERS = 1;
const playerSchema = Yup.object({
  lastName: Yup.string()
    .trim()
    .min(1, 'Nom requis')
    .matches(
      nameRegex,
      "Les caractères autorisés pour votre nom sont limités à l'alphabet et le '-'",
    )
    .required('Nom requis'),
  firstName: Yup.string()
    .trim()
    .min(1, 'Prénom requis')
    .matches(
      nameRegex,
      "Les caractères autorisés pour votre prénom sont limités à l'alphabet et le '-'",
    )
    .required('Prénom requis'),
  callSign: Yup.string()
    .trim()
    .min(1, 'Call sign requis')
    .matches(
      callSignAndTeamRegex,
      'Call sign invalide, exemple accepté : "Team", "03 Team", "03_Team", "03-Team", "Team_03", "Team 03", "Team-03".',
    )
    .required('Call sign requis'),
  email: Yup.string().trim().email('Email invalide').required('Email requis'),
  age: Yup.number()
    // Caste "18", " 19 " etc. en nombre ; vide -> NaN pour déclencher typeError/required
    .transform((value, originalValue) => {
      if (typeof originalValue === 'string') {
        const trimmed = originalValue.trim();
        return trimmed === '' ? NaN : Number(trimmed);
      }
      return value;
    })
    .typeError("L'âge doit être un nombre")
    .integer("L'âge doit être un entier")
    .moreThan(17, 'Le joueur doit être majeur')
    .required('Âge requis'),
}).noUnknown(true, 'Champs non reconnus');

const playersCountShema = Yup.number()
  .transform((value, originalValue) =>
    originalValue === '' ? NaN : Number(originalValue),
  )
  .typeError('Doit être un nombre')
  .integer('Doit être un entier')
  .min(MIN_PLAYERS, 'Au moins 1')
  .max(MAX_PLAYERS, `Maximum ${MAX_PLAYERS}`)
  .required('Requis');

export const validationSchema = Yup.object({
  team: Yup.string()
    .trim()
    .min(2, 'Nom de team requis trop court')
    .max(25, 'nom de team trop long')
    .matches(
      callSignAndTeamRegex,
      'Nom de team invalide, exemple accepté : "Team", "03 Team", "03_Team", "03-Team", "Team_03", "Team 03", "Team-03".',
    )
    .required('Nom de team requis'),
  playersCount: playersCountShema,
  players: Yup.array()
    .of(playerSchema)
    .min(MIN_PLAYERS, 'Au moins un joueur')
    .max(MAX_PLAYERS, `Maximum ${MAX_PLAYERS} joueurs`)
    // .min(1, "Au moins un joueur")  // décommente si tu veux exiger ≥ 1 joueur
    .required(),
});

export const recapSchema = Yup.object({
  authorizationFromOtherPlayers: Yup.boolean().oneOf(
    [true],
    "Vous devez certifier avoir l'autorisation des autres joueurs",
  ),
  valuesValidated: Yup.boolean().oneOf(
    [true],
    'Vous devez vérifier que les informations sont correctes',
  ),
  hasReadRules: Yup.boolean().oneOf(
    [true],
    'Vous devez avoir lu et accepté le règlement',
  ),
  hasReadPrivacy: Yup.boolean().oneOf(
    [true],
    'Vous devez avoir lu et accepté la politique de confidentialité',
  ),
  hasReadPayback: Yup.boolean().oneOf(
    [true],
    'Vous devez avoir lu la politique de remboursement',
  ),
});
