import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />


      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
        <Route  path="/" element={<Inicio />} />
        <Route  path="/sobremim" element={<SobreMim />}/>
      </Route>

        <Route  path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Rodape>
        
      </Rodape>
    </BrowserRouter>
  )
}

export default AppRoutes;
