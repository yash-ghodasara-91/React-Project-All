// import React from 'react'
// import JsonApi from './Components/ApiFormData'

// const App = () => {
//   return (
//     <div>
//       <JsonApi />
//     </div>
//   )
// }

// export default App


import React from 'react'
import { store } from './app/Store'
import ReduxCounter from './ReduxCounter'
import { Provider } from 'react-redux'
import TodoRedux from './Components/TodoRedux'

const App = () => {
  return (
    <div>
      <Provider store = {store}>
        {/* <ReduxCounter /> */}
        <TodoRedux />
      </Provider>
    </div>
  )
}

export default App
