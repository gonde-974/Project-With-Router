import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

// page
import ProductsPage from './pages/ProductsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

// step:1 
const router =createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:"products",
        element: <ProductsPage />
      },
      {
        path:"contact",
        element:<ContactPage />
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Step 2:Provider Router */}
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
