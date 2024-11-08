import "./App.css";
import Navbar from "./components/Navbar";

import App_routes from "./Routes/AppRoutes";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <App_routes />
    </div>
  );
}

export default App;
