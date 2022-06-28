import { Home, Screen, Login } from './Pages/export-index'
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
          <Route path='/login' element={<Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
