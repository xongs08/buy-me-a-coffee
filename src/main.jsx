import './main.css';

import React from 'react'
import ReactDOM from 'react-dom/client'

// confit router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.jsx';
import PixPage from './pages/pix/PixPage.jsx';
import NoPage from './pages/NoPage.jsx';
import App from './App.jsx';

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />
//   },
//   {
//     path: "/pix",
//     element: <PixPage />
//   },
//   {
//     path: "/*",
//     element: <NoPage />
//   },
// ]);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/pix",
        element: <PixPage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
);
