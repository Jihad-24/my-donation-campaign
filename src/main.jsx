import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import MainLayout from './Layout/MainLayout';
import Statistics from './components/Statistics/Statistics';
import Card from './components/Card/Card';
import Donation from './components/Donation/Donation';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../data.json')
      },
      {
        path: "/Donation",
        element:<Donation></Donation>
      },
      {
        path: "/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "/cards/:id",
        element: <Card></Card>,
        loader: ()=> fetch('../data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
