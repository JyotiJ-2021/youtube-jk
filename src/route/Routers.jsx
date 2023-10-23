import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"; 
import Home from '../components/Home';
import Watch from '../components/Watch';
import Filter from '../components/Filter';
import Playlist from '../components/Playlist';
import Premiumn from '../components/Premiumn';
import PremiumPlan from '../components/PremiumPlan';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Layout from '../components/Layout/Layout';
  
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <Signin   />,
    },
    {
      path: "/signup",
      element: <Signup   />,
    },
    {
      path: "/",
      element:<Layout> <Home   /> </Layout>,
    },
    {
      path: "/watch/:id",
      element:<Layout>  <Watch   /> </Layout>,
    },
    {
      path: "/filter/:type",
      element:<Layout>    <Filter   />  </Layout>,
    },
    {
      path: "/watchlater",
      element:<Layout> <Playlist   />  </Layout>,
    },
    {
      path: "/premium",
      element:<Layout> <Premiumn   />  </Layout>,
    },
    {
      path: "/premium/offers",
      element:<Layout> <PremiumPlan      /></Layout>,
    },
  ]);
const Routers = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routers