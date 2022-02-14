import React from 'react'
import AppRedux from './AppRedux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const ReduxExample = () => {

  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


  return (
    <div style={{height: '100vh'}}>
      <Provider store={store}>
      <AppRedux /></Provider>
    </div>
  )
}

export default ReduxExample