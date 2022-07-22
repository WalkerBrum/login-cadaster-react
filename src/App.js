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
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/user/cadaster' element={<Register/>}/>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
