import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Customizer from "./components/Customizer";
import Productlist from "./components/Productlist";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route element={<Home></Home>} path="homepage" />
          <Route
            element={<Customizer></Customizer>}
            path="customize/:modelname"
          />
          <Route element={<Productlist></Productlist>} path="product" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
