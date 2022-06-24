import Navbar from "components/Navbar";
import Navbar2 from "components/Navbar2";
import Catalogo from "Pages/Catalogo";
import Home from "Pages/Home";
import Login from "Pages/Login";
import Produto from "Pages/Produto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from 'assets/images/bannerfinal.png';

function BRoutes() {
    return (
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<><Navbar /><Navbar2 /><Home /><img src={Banner} /></>}></Route>
            <Route path="/catalogo" element={<><Navbar /><Navbar2 /><Catalogo /><img src={Banner} /></>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/produto" element={<><Navbar /><Navbar2 /><Produto /><img src={Banner} /></>}></Route>
        </Routes>
     </BrowserRouter>
    );
  }
  
  export default BRoutes;