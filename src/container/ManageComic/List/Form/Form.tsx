import { Button, Grid } from '@mui/material';
import DropDown from '../../../../components/DropDown';
import { useStyles } from './style';

const dataDropDownFake = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'item1',
    label: 'item1',
  },
  {
    value: 'item2',
    label: 'item2',
  },
  {
    value: 'item3',
    label: 'item3',
  },
  {
    value: 'item4',
    label: 'item4',
  },
  {
    value: 'item5',
    label: 'item5',
  },
];

const Form = () => {
  const classes = useStyles();
  const handleChangeForm = () => {};
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <DropDown
            label="Quốc gia"
            value=""
            name="statusAdmin"
            data={dataDropDownFake}
            onChange={handleChangeForm}
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <DropDown
            label="Thể loại"
            value=""
            name="statusAdmin"
            data={dataDropDownFake}
            onChange={handleChangeForm}
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <DropDown
            label="Tình Trạng"
            value=""
            name="statusAdmin"
            data={dataDropDownFake}
            onChange={handleChangeForm}
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <DropDown
            label="Số chương"
            value=""
            name="statusAdmin"
            data={dataDropDownFake}
            onChange={handleChangeForm}
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <DropDown
            label="Sắp xếp"
            value=""
            name="statusAdmin"
            data={dataDropDownFake}
            onChange={handleChangeForm}
          />
        </Grid>
      </Grid>
      <Grid
        className={classes.config}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary">
          Clear
        </Button>
      </Grid>
    </>
  );
};

export default Form;
