import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
