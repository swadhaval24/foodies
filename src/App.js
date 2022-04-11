import "./App.css";
import React from "react";
import Router from "./Router";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router />
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
