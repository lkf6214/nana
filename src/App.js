// import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";
import SubPage from "./pages/SubPage";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <MainPage />
      </BrowserRouter>
      {/* <BrowserRouter>
        <Router>
          <MainSection />
          <Routes>
            <Footer>
              <Route exact path="/" component={MainPage} />
              <Route path="/subpage" component={SubPage} />
              <Route component={NotFound} />
            </Footer>
          </Routes>
        </Router>
      </BrowserRouter> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
