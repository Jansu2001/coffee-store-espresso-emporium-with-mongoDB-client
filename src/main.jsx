import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import UpdateCoffee from './components/updateCoffee/UpdateCoffee.jsx';
import AddCoffee from './components/addCoffee/AddCoffee.jsx';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update-coffee',
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
