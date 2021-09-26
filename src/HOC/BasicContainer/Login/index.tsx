import * as React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useStyles } from './style';
import { LoginProps, INIT_VALUE, validationSchema } from './config';
import {
  GOOGLE_LOGIN_ID,
  FACEBOOK_LOGIN_ID,
} from './../../../constants/config';

const Login: React.FC<LoginProps> = ({ submit }) => {
  const classes = useStyles();
  const [showPass, setShowPass] = React.useState(false);

  const setShowPassword = () => {
    setShowPass(!showPass);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  const responseFacebook = (response: any) => {
    console.log(response);
  };

  return (
    <Formik
      initialValues={INIT_VALUE}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      <form className={classes.container}>
        <TextField label="Email" variant="outlined" name="email" />
        <FormControl sx={{ width: '25ch' }} variant="outlined">
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
        </FormControl>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Nhớ mật khẩu"
            />
          </Grid>
          <Grid item>
            <Link to="/"> Quên mật khẩu </Link>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={12}>
            <Button className={classes.buttonLogin} variant="contained">
              Đăng nhập
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xl={12}>
            <hr />
          </Grid>
          <Grid item xl={3}>
            <GoogleLogin
              clientId={GOOGLE_LOGIN_ID}
              buttonText="Login bằng google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              render={(renderProps) => (
                <IconButton
                  size="large"
                  onClick={renderProps.onClick}
                  color="secondary"
                >
                  <GoogleIcon />
                </IconButton>
              )}
            />
            <FacebookLogin
              appId={FACEBOOK_LOGIN_ID}
              autoLoad={false}
              callback={responseFacebook}
              icon={
                <IconButton color="primary">
                  <FacebookRoundedIcon />
                </IconButton>
              }
              textButton=""
              cssClass={classes.buttonFacebook}
            />
          </Grid>
        </Grid>
      </form>
    </Formik>
  );
};

export default Login;
