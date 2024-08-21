import React from "react";
import Mainpage from "./Components/Mainpage";
import "./App.css"
import Aboutpage from "./Components/Aboutpage";
import Shoppage from "./Components/Shoppage";
import Contactpage from "./Components/Contactpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/shop" element={<Shoppage />}></Route>
        <Route path="/contact" element={<Contactpage/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage></Mainpage>}></Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  )
  
}
export default App;