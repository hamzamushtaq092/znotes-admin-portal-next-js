import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">{/* Your main content here */}</main>
      </div>
    </Router>
  );
}

export default App;
