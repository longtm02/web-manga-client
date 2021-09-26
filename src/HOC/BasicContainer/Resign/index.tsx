import * as React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
  FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import { useStyles } from './style';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required')
    .max(191, 'Email không quá 191 kí tự'),
  password: yup
    .string()
    .required('password is required')
    .max(191, 'password không quá 191 kí tự'),
});

interface ResignProps {
  //   open: boolean
  //   close: () => void
  //   children: React.ReactNode
  //   title: string
  submit: () => void;
}

const INIT_VALUE = {
  email: '',
  password: '',
};

const Resign: React.FC<ResignProps> = ({ submit }) => {
  const classes = useStyles();
  const [showPass, setShowPass] = React.useState(false);

  const setShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <Formik
      initialValues={INIT_VALUE}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log({ values });
        console.log('c;lamc;lsm');

        submit();
      }}
    >
      {({ handleSubmit, setFieldValue, touched, errors }) => {
        return (
          <form
            className={classes.container}
            onSubmit={handleSubmit}
            onBlur={(e) => {
              setFieldValue(e.target.name, e.target.value.trim());
            }}
          >
            <TextField
              label="email"
              variant="outlined"
              name="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <FormControl
              error={touched.password && Boolean(errors.password)}
              sx={{ width: '25ch' }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                name="password"
                id="outlined-adornment-password"
                type={showPass ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={setShowPassword}
                      onMouseDown={setShowPassword}
                      edge="end"
                    >
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText>
                {touched.password && errors.password}
              </FormHelperText>
            </FormControl>
            <FormControl
              error={touched.password && Boolean(errors.password)}
              sx={{ width: '25ch' }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password confirm
              </InputLabel>
              <OutlinedInput
                name="passwordConfirm"
                id="outlined-adornment-password"
                type={showPass ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={setShowPassword}
                      onMouseDown={setShowPassword}
                      edge="end"
                    >
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password confirm"
              />
              <FormHelperText>
                {touched.password && errors.password}
              </FormHelperText>
            </FormControl>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Grid item md={12}>
                <Button className={classes.buttonLogin} variant="contained">
                  Đăng kí
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};

export default Resign;
