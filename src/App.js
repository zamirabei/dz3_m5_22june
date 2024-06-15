import React from "react";
import UserPage from "./pages/UserPage/UserPage/UserPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage1 from "./pages/UserPage/UsersPage/UsersPage1";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<UserPage/>}/>
            <Route path="/user/:userId" element={<UsersPage1/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
