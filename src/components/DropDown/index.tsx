import { MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useStyles } from './style';

interface DropDownProp {
  onChange: (value: any) => void;
  label: string;
  name: string;
  value: any;
  data: Item[];
}

interface Item {
  label: string;
  value: any;
}

const DropDown: React.FC<DropDownProp> = ({
  onChange,
  label,
  name,
  value,
  data,
}) => {
  const classes = useStyles();
  return (
    <TextField
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      variant="outlined"
      select
      className={classes.selectBox}
    >
      {data.map((e: Item, index: number) => {
        return (
          <MenuItem key={index} value={e.value}>
            {e.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default DropDown;
