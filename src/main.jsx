import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicles.js';
import VehicleView from './views/VehiclesView.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Car",
    element: <div>Car Page</div>,
  },
];

vehicles.forEach((vehicle) =>{
  routes.push({
    path: vehicle.url,
    element: <VehicleView vehicle={vehicle}/> 
  })
})

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
