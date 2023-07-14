// import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Pages/MainPage";
import SubPage from "./Pages/SubPage";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/sub" element={<SubPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
