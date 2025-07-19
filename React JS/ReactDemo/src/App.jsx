// import React from 'react'

// import Home from './Component/RoutingWithRouter/Home';
// import About from './Component/RoutingWithRouter/About';
// import Contact from './Component/RoutingWithRouter/Contact';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Display from './CrudWuthRouting/Display';
// import Create from './CrudWuthRouting/Create';
// import PrektishCrud from './Component/PrektishCrud';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//     <PrektishCrud />
// {/*       
//       <Routes>
//         <Route path='/' element={<Display/>}></Route>
//         <Route path='/create' element={<Create />}></Route>
//       </Routes> */}
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Searching from './Component/Searching'
import BasicsOfApi from './Api/BasicsOfApi'

const App = () => {
  return (
    <div>
      {/* <Searching /> */}

      <BasicsOfApi />
    </div>
  )
}

export default App
