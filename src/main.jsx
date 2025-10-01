import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './src/pages/About.jsx'
import Projects from './src/pages/project.jsx'
import Contacts from './src/pages/contacts.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Projects',
    element:<Projects/>
  },
  {
    path:'/About',
  element:<About/>
  },
  {
    path:'/Contacts',
    element:<Contacts/>
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
