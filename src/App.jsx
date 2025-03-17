import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChurchDetailPage from "./components/churchInfo/ChurchDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/church/:id" element={<ChurchDetailPage />} />
        {/* <Route path="/user/:id" element={<UserPage />} /> 
        <Route path="*" element={<NotFoundPage />} />{" "}
        */}
      </Routes>
    </Router>
  );
}

export default App;
