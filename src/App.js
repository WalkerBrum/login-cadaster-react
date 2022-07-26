import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Access } from './Components/Access';

import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />
        <Access />

        <Routes>
          <Route path='/login-cadaster-react/' element={<Home />}/>
          <Route path='/login-cadaster-react/login' element={<Login />}/>
          <Route path='/login-cadaster-react/cadaster' element={<Register/>}/>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
