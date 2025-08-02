// import React from 'react'
// import JsonApi from './Components/ApiFormData'
// import ApiFormData2 from './Components/ApiFormData2'
// import ApiForm3 from './Components/ApiForm3'
// import ApiCrud4 from './Components/ApiCrud4'
// import ApiCRUD5 from './Components/ApiCRUD5'

// const App = () => {
//   return (
//     <div>
//       {/* <JsonApi /> */}
//       {/* <ApiForm3 /> */}
//       {/* <ApiFormData2 /> */}
//       {/* <ApiCrud4 /> */}
//       <ApiCRUD5 />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { store } from './app/Store'
// import { Provider } from "react-redux";
// import ReduxTodo from './Components/ReduxTodo';
// import ApiReduxCoall from './Components/ApiReduxCoall';


// const App = () => {
//   return (
//     <div>
//     <Provider store={store} >
//     {/* <ReduxTodo /> */}
//     <ApiReduxCoall />
//     </Provider>
    
//     </div>
//   )
// }

// export default App

import React from 'react'
import SignUp from './Firebase/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Desboard from './Firebase/Desboard'
import Login from './Firebase/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/desboard' element={<Desboard />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

