import { 
  Screen, 
  Home, 
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Screen />} />
          <Route path='/residentPage' element={<Home />} />
          <Route path='/searchPage' element={<Search />} />
          <Route path='/productPage:id' element={<Product />} />
          <Route path='/eventsPage' element={<Events />} />
          <Route path='/login' element={<Login /> } />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
