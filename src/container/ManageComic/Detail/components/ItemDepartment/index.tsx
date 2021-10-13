import { Grid } from '@mui/material';
interface ItemDepartmentProp {
  title: string;
  value: string;
}

const ItemDepartment: React.FC<ItemDepartmentProp> = ({ title, value }) => {
  return (
    <Grid container justifyContent="flex-start" alignItems="flex-start">
      <Grid item sm={1}>
        {title}
      </Grid>
      <Grid item sm={11}>
        {value}
      </Grid>
    </Grid>
  );
};

export default ItemDepartment;
