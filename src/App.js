
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Contacto } from "./pages/contacto";
import { Equipo } from "./pages/Equipo";
import { Galeria } from "./pages/Galeria";
import { QuienesSomos } from "./pages/Quienes";
import { Servicios } from "./pages/Servicios";




function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<QuienesSomos />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/portfolio" element={<Galeria />} />
        <Route path="/team" element={<Equipo />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>

    </div>
  );
}

export default App;
