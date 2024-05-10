import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import axios from 'axios'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.jsx'

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
