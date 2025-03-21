import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChurchDetailPage from "./components/churchInfo/ChurchDetailPage";
import { IconsDetailPage } from "./components/icons/IconsDetailPage";
import Artists from "./components/artists/Artists";
import { Iconostas } from "./components/iconostas/Iconostas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/church/:id" element={<ChurchDetailPage />} />
        <Route path="/icon/:id" element={<IconsDetailPage />} />
        <Route path="/artist/:id" element={<Artists />} />
        <Route path="/element/:id" element={<Iconostas />} />
      </Routes>
    </Router>
  );
}

export default App;
