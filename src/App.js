import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import PagenotFound from './PagenotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/orders" element={<Orders/>}  />
        <Route path="*" element={<PagenotFound/>}  />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

