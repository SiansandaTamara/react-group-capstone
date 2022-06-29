/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/configureStore';
import Navbar from './Components/Navbar';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Navbar />
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
);

reportWebVitals();
