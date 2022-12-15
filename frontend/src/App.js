import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./components/todos/Todos";
import Signin from "./components/auth/Signin";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" exact element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
