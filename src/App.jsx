import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes"

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <AppRoutes />


    </div>
  );
}

export default App;
