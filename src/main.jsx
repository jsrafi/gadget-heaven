import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ItemDetail from './Components/ItemDetail/ItemDetail.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Cart from './Components/Cart/Cart.jsx';
import WishList from './Components/WishList/WishList.jsx';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Review from './Components/Review/Review.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
            loader: ()=> fetch('/data.json')
          },
          {
            path: "wish",
            element: <WishList></WishList>,
            loader: ()=> fetch('/data.json')
          }
        ]

      },
      {
        path: "items/:itemId",
        element: <ItemDetail></ItemDetail>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/review",
        element: <Review></Review>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
