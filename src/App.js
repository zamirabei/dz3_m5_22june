import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import SecondPage from "./pages/secondPage/SecondPage";
const App = () => {
  return (
    <BrowserRouter>
     <Menu/>
      <Routes>
        <Route index element={<MainPage />} />
          <Route path="/users" element={<SecondPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
