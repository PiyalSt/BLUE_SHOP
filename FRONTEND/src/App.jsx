import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/shop/Home";
import ShopLayout from "./layouts/shop/ShopLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AuthLayout from "./layouts/auth/AuthLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShopLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
