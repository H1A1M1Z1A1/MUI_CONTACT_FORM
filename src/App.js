import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Contacthead from "./components/Contacthead";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <div className="Bodyhead">
        <Contacthead></Contacthead>
      </div>
    </div>
  );
}

export default App;
