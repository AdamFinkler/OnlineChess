import React from "react";
import "./App.css";
import ContentPage from "./pages/ContentPage/ContentPage";
import { Toolbar } from "./components/Board/Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <ContentPage />
    </div>
  );
}

export default App;
