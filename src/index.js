import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import ShopService from './services/shop-service';
import ShopServiceContext from './components/Shop-service-context/Shop-service-context';

const shopService = new ShopService();

ReactDOM.render(
  <Provider store={store}>
    <ShopServiceContext.Provider value={shopService}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopServiceContext.Provider>
  </Provider >,
  document.getElementById('root')
);


