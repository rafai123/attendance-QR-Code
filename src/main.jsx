import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} errorElement={<ErrorPage />} >

      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
