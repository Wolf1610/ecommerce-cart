import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';

import './App.css';


import Product from "./components/Products"
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))



  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>        
    </>
  )
}

export default App
