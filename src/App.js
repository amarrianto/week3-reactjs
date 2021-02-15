import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./container/MainLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  
    return (
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );
  }


export default App;
