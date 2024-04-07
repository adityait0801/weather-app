import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import Body from './components/Body';
import City from './components/City';
import Error from './components/Error';

const AppLayout = () => {
  return ( 
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter ([
  {
    path : '/', 
    element : <AppLayout/>, 
    children : [
      {
        path : '/',
        element : <Body/>
      }, 
      {
        path : '/city', 
        element : <City/>
      }
    ],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

