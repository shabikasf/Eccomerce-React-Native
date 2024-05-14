import React from 'react';
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import Store from './state/store'; 
const App = () => {  
  return(
    <Provider store={Store}>
      <Navigation />
    </Provider>
  )
}

export default App;
 