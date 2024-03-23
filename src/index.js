import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SUVsPage from './SUVsPage';
import Hatchbacks from './Hatchbacks';
import Saloons from './Saloons'
import Coupes from './Coupes'
import Estates from './Estates'
import SportsCar from './SportsCar';
import Buycar from './Buycar';
import Carreviews from './Carreviews';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
  }, 
  {
    path: "suvs",
    element: <SUVsPage /> ,
  },
  {
    path: "hatchbacks",
    element: <Hatchbacks /> ,
  },
  {
    path: "saloons",
    element: <Saloons /> ,
  },
  {
    path: "coupes",
    element: <Coupes /> ,
  },
  {
    path: "estates",
    element: <Estates /> ,
  },
  {
    path: "sportscar",
    element: <SportsCar /> ,
  },
  {
    path: "buycar",
    element: <Buycar /> ,
  },
  {
    path: "carreviews",
    element: <Carreviews /> ,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
