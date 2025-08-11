import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './utils/Context.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Context>


  {/* Use Vite's BASE_URL as basename so routing works under /Warm-up-react on GitHub Pages */}
  <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
      <ToastContainer/>
    </BrowserRouter>

  </Context>


)
