import React from "react";
import "./App.css";

//Custom Imports
import NavBar from "./Components/Navbar/Navbar";
import routes from "./routes";
function App() {
  return (
    <div className="">
      <NavBar />
      {routes}
    </div>
  );
}

export default App;
