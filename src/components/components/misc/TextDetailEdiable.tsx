import { TextField, TextFieldProps } from "@mui/material";
import { useFormikContext } from "formik";
import { FormValues } from "../registrationForm/RegisterDialog";
import { get } from "lodash";

export const TextDetailEditable: React.FC<TextFieldProps> = ({
  name,
  ...props
}) => {
  const { values, setFieldValue, errors } = useFormikContext<FormValues>();

  return (
    <TextField
      {...props}
      value={get(values, name ?? "")}
      onChange={async (event) => {
        if (props.onChange) {
          props.onChange(event);
        }
        const v = event.target.value;
        setFieldValue(name ?? "", v, false); // pas de validation globale
      }}
      error={!!get(errors, name ?? "")}
      helperText={get(errors, name ?? "")}
    />
  );
};
