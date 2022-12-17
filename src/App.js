import Login from "./Login";
import Cadastro from "./Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habitos from "./Habitos";


export default function App() {
  return (
  <BrowserRouter>
  <div>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/cadastro" element={<Cadastro/>}></Route>
    <Route path="/habitos" element={<Habitos/>}></Route>
   </Routes>

  </div>
  </BrowserRouter>
  );
}
