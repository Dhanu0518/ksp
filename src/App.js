import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Client from "./Components/Client/Client";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/client" element={<Client />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
