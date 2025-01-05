import ReactDOM from 'react-dom';
import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import App from './App.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
);
