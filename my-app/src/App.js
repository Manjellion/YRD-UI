import React, { 
  useState, 
  useEffect, 
} from 'react'
import { 
  Screen, 
  Home, 
  ResidentHome,
  TouristHome,
  Search,
  Events,
  Login, 
  Register, 
  Product
} from './Pages/export-index'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ClimbingBoxLoader  from 'react-spinners/ClimbingBoxLoader'

function App() {

  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)

  }, [])

  return (
    <div>
      {
        loading ? 

        <ClimbingBoxLoader 
          size={30}
          color={"#10BAF1"}
          loading={loading}
          style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
          }}
        />

        :

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Screen />} />
            <Route path='/residentPage' element={<ResidentHome />} />
            <Route path='/businessPage' element={<Home />} />
            <Route path='/touristPage' element={<TouristHome />} />
            <Route path='/searchPage' element={<Search />} />
            <Route path='/productPage:id' element={<Product />} />
            <Route path='/eventsPage' element={<Events />} />
            <Route path='/login' element={<Login /> } />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
