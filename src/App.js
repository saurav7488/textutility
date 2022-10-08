import "./App.css";

import Navbar from "./Navbar";
import Textform from "./Textform";
import Alert from "./Alert";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const fun = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "blue";
      showAlert("Dark mode enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enable", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <>
      <Navbar hypo="TextUtilis" toggle={fun} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
      <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
