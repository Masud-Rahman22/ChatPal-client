import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './routes/Routes.jsx';
import AuthProvider from './ContextApi/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={Routes} />
      </AuthProvider> 
  </React.StrictMode>,
)
