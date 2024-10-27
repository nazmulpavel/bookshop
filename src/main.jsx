import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import Authprovider from './provider/Authprovider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <Authprovider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </Authprovider>
    </HelmetProvider>

  </StrictMode>,
)
