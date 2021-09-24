import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashBoard from './container/DashBoard';
import { NotFoundPage } from './container/ErrorPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/abc" component={DashBoard} />
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
