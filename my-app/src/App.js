import Home from './Pages/Home'
import Screen from './Pages/Screen'
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
