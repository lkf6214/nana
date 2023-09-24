// import logo from "./logo.svg";
import "./App.css";
// import MainPage from "./Pages/MainPage";
import VisualDesign from "./Pages/VisualDesign";
import Neuronet from "./Pages/Neuronet";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          {/* <Route path="/nana" element={<MainPage />} /> */}
          <Route path="/visualDesign" element={<VisualDesign />} />
          <Route path="/3DService" element={<Neuronet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
