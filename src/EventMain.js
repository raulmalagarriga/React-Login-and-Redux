import React from 'react'
import Approuter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const EventMain = () => {
  return ( 
    <Provider store={store}>
      <Approuter />
    </Provider>
   );
}
 
export default EventMain;