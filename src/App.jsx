import { useState } from 'react'

import './App.css'
import NavBarComponent from './components/NavBarComponent'
import { Outlet } from 'react-router'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

//pages
// import ProductsPage from './pages/ProductsPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {


  return (
   
     <div>
    < NavBarComponent />
    

        {/* step 3: RETURN PAGE */}
        <Outlet />
        <ToastContainer />
     </div>
    
  )
}

export default App
