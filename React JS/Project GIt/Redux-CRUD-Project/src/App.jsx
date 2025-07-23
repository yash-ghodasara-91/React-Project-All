import React from 'react'
import { Provider } from "react-redux";
import { store } from './App/Store';
import TodoRedux from './Components/TodoRedux';

const App = () => {
  return (
    <div>
      <Provider store={store} >
      <TodoRedux />
      </Provider>
    </div>
  )
}

export default App
