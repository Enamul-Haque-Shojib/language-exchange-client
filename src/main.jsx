import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './context/AuthContext/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import 'react-tabs/style/react-tabs.css';
import 'swiper/css';
import 'swiper/css/navigation';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)
