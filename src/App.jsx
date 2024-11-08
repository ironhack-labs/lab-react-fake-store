import "./App.css";
import Navigation from "../src/components/Navigation/Navigation.jsx"
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
