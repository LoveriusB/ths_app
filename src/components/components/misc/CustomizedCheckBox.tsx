import { Checkbox, CheckboxProps } from '@mui/material';
import { useFormikContext } from 'formik';
import { get, isNil } from 'lodash';
import { CustomCheckedIcon, CustomIcon } from './CustomCheckbox';

interface UnLabelledCustomizedCheckBoxProps extends CheckboxProps {
  name: string;
  unCheckedIconStyle?: React.CSSProperties;
  checkedIconStyle?: React.CSSProperties;
}

export const CustomizedCheckBox: React.FC<
  UnLabelledCustomizedCheckBoxProps
> = ({ name, unCheckedIconStyle, checkedIconStyle, ...rest }) => {
  const { values, setFieldValue } = useFormikContext();

  const onCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    if (!isNil(rest.onChange)) rest.onChange(event, checked);
    setFieldValue(event.target.name, checked);
  };

  return (
    <Checkbox
      id={name}
      checked={get(values, name, false)}
      onChange={onCheckboxChange}
      name={name}
      icon={
        !isNil(rest.icon) ? (
          rest.icon
        ) : (
          <CustomIcon style={unCheckedIconStyle} />
        )
      }
      checkedIcon={
        !isNil(rest.checkedIcon) ? (
          rest.checkedIcon
        ) : (
          <CustomCheckedIcon style={checkedIconStyle} />
        )
      }
    />
  );
};
