import { useState } from 'react'

import './App.css'
import NavBarComponent from './components/NavBarComponent'

//pages
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
let pathName = window.location.pathname.slice(1);
console.log(pathName);

function checkCurrentPage (){
  if(pathName === "products"){
    return <ProductsPage />
  }else if(pathName === 'about'){
    return <AboutPage />
  }else if(pathName === 'contact'){
    return <ContactPage />
  }

}


  return (
   
     <div>
    < NavBarComponent />

   { checkCurrentPage()}
     </div>
    
  )
}

export default App
