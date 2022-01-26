import React from "react";
import { Navigate,BrowserRouter,Routes,Route } from "react-router-dom";
import Game from "./Game";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/play" element={<Game/>} />
          <Route path="/" element={<Navigate to="/play"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
