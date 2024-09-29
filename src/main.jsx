import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import './global.css'
import './index.css'
import Home from "./assets/pages/Home"
import Produtos from "./assets/pages/Produtos"
import Games from "./assets/pages/Games"
import Sobre from "./assets/pages/Sobre"
import Corridas from "./assets/pages/Corridas"
import Noticias from "./assets/pages/Noticias"
import Comunidade from "./assets/pages/Comunidade"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path: 'produtos', element: <Produtos/>},
      {path: 'games', element: <Games/>},
      {path: 'sobre', element: <Sobre/>},
      {path: 'corridas', element: <Corridas/>},
      {path: 'noticias', element: <Noticias/>},
      {path: 'comunidade', element: <Comunidade/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)

