import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { FoodMenu } from "./components/FoodMenu.jsx";
import BottomNavbar from "./components/BottomNavbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { MainCourse } from "./components/MainCourse.jsx";
import { Starter } from "./components/Starter.jsx";
import { Beverages } from "./components/Beverages.jsx";
import About from "./components/About.jsx";
import PayUs from "./components/PayUs.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <FoodMenu />
        <Routes>
          <Route path="/maincourse" element={<MainCourse />} />
          <Route path="/starters" element={<Starter />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/about" element={<About />} />
          <Route path="/payus" element={<PayUs />} />
        </Routes>
        <BottomNavbar />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
