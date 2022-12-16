import Login from "./Login";
import Cadastro from "./Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
  <BrowserRouter>
  <div>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/cadastro" element={<Cadastro/>}></Route>
   </Routes>

  </div>
  </BrowserRouter>
  );
}
