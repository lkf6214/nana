// import logo from "./logo.svg";
import "./App.css";

import NotFound from "./components/NotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import MainPage from "./Pages/MainPage";
import VisualDesign from "./Pages/VisualDesign";
import Neuronet from "./Pages/Neuronet";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Neuronet />} />
          <Route path="/3DService" element={<Neuronet />} />
          <Route path="/visualDesign" element={<VisualDesign />} />
          <Route path="/Illustration" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
