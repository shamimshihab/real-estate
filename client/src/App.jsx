import "./layout.scss";

import Navbar from "./components/navBAR/Navbar";
import HomePage from "./components/routes/homePage/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
