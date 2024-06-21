import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Counter from "./counter/Counter";
import MainPage from "./mainPage/MainPage";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path='/counter' element={<Counter/>}/>
        </Routes>

    </BrowserRouter>
  );
};

export default App;
