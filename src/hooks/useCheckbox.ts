import { useFormikContext } from 'formik';
/**
 *  This hook provides a few util functions for the checkbox.
 *  The name is required.
 * @param name the name of the CheckBox
 * @returns a few util functions for the checkbox.
 */
export const useCheckBoxUtils = () => {
  const { setFieldValue } = useFormikContext();

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    setFieldValue(event.target.name, checked);
  };

  return { onChange };
};
