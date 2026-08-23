
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import Clothing from "./Components/Clothing";
import Shop from "./Components/Shop";
import Accessories from "./Components/Accessories";
import Footer_section from "./Components/Footer_section";
import Men_products from "./Components/Pages/Men_products";
import Women_products from './Components//Pages/Women_products';
import Kids_products from './Components/Pages/Kids_products';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/Clothing" element={<Clothing/>} />

        <Route path="/Shop" element={<Shop/>} />

      <Route path="/Accessories" element={<Accessories/>} />        
      <Route path="/Men_products"  element ={<Men_products/>}/>
      <Route path="/Women_products" element ={<Women_products/>}/>
      <Route path="/Kids_products" element ={< Kids_products/>}/>
      </Routes>
<Footer_section/>
    </BrowserRouter>
  );
}

export default App;