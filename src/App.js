import "./App.css";
import React from "react";
import Router from "./Router";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
