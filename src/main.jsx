import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.jsx'
import NotLoginPage from './pages/NotLoginPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import StudentListPage from './pages/StudentListPage.jsx'
import AddStudentPage from './pages/AddStudentPage.jsx'
import QRGeneratorPage from './pages/QRGeneratorPage.jsx'
import RoomListPage from './pages/RoomListPage.jsx'
import AddRoomPage from './pages/AddRoomPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} errorElement={<ErrorPage />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/not-login' element={<NotLoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/student-list' element={<StudentListPage />} />
        <Route path='/student-list/add-student' element={<AddStudentPage />} />
        <Route path="/student-list/qr/:id" element={<QRGeneratorPage />} />
        <Route path='/attendance-room-list' element={<RoomListPage />} />
        <Route path='/attendance-room-list/add-room' element={<AddRoomPage />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
