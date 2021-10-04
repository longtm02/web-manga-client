import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { App } from './App';
import configureStore from './store';
import theme from './constants/theme';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
