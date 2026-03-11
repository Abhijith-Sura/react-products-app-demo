import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
import ContactUS from './components/ContactUS';

function App() {
  console.log("App component initializing");
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <ProductsList />,
        },
        {
          path: "products/:productId",
          element: <Product />,
        },
        {
          path: "contact",
          element: <ContactUS />,
        }
      ]
    },

  ]
  )
  return (
    <RouterProvider router={routerObj} />
  )
}

export default App