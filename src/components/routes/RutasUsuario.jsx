import { Routes, Route } from "react-router-dom";
import Notas from "../views/Notas";

const RutasUsuario = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/notas"
          element={<Notas></Notas>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasUsuario;
