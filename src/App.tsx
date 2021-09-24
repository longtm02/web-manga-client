import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashBoard from './container/DashBoard';
import ErrorPage from './container/ErrorPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
