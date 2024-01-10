import "./App.css";

import Checkout from "./Component/Checkout/Checkout";
import Bodycontent from "./Component/ClientsideHome/Bodycontent";
import Clientside from "./Component/ClientsideHome/Clientside";

import Home from "./Component/Admin/Home/Home"
import {Routes, Route } from "react-router-dom";
import Image from './Component/Admin/Imageupload/Image';
import Dashboard from './Component/Admin/Dashboard/Dashboard';

function App() {
  
  return (
    <>
 <Routes>
<Route path="/" element={<Clientside/>}>
<Route index element={<Bodycontent/>} />
<Route path="checkout" element={<Checkout/>} />
</Route> 
         

<Route path="/admin-dashboard" element={<Home/>}>
<Route index element={<Dashboard/>} />
<Route path="addimage" element={<Image/>} />
</Route> 

 
  </Routes>
    </>
  );
}

export default App;
