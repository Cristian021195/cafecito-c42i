import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Administrador from "./components/views/Administrador";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
        <Routes>
          <Route exact path="/" element={<Inicio/>}></Route>
          <Route exact path="/registro" element={<Registro/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/detalle" element={<DetalleProducto/>}></Route>
          <Route exact path="/admin" element={<Administrador/>}></Route>
          <Route exact path="/admin/crear-producto" element={<CrearProducto/>}></Route>
          <Route exact path="/admin/editar-producto" element={<EditarProducto/>}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

/*
¿Si quiero tener /  /inicio y tambien /home como pagina principal?

*/

export default App; // json-server --watch db.json --port 3004
