import './main.css';

import React from 'react'
import ReactDOM from 'react-dom/client'

// confit router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.jsx';
import PixPage from './pages/pix/PixPage.jsx';
import NoPage from './pages/404/NoPage.jsx';
import App from './App.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/buy-me-a-coffee/",
        element: <HomePage />
      },
      {
        path: "/buy-me-a-coffee/pix",
        element: <PixPage />
      },
      {
        path: "/buy-me-a-coffee/*",
        element: <NoPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
);
