import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashBoard from './container/DashBoard';
import ErrorPage from './container/ErrorPage';
import List from './container/ManageComic/List';
import Detail from './container/ManageComic/Detail';
import History from './container/ManageComic/History';
import Follow from './container/ManageComic/Follow';
import { URL_MANGA_MANAGEMENT, URL_CONFIG } from './constants/link';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={URL_CONFIG.DASH_BOARD} component={DashBoard} />
          <Route exact path={URL_MANGA_MANAGEMENT.LIST} component={List} />
          <Route exact path={URL_MANGA_MANAGEMENT.DETAIL} component={Detail} />
          <Route exact path={URL_MANGA_MANAGEMENT.FOLLOW} component={Follow} />
          <Route
            exact
            path={URL_MANGA_MANAGEMENT.HISTORY}
            component={History}
          />
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
