import React from "react";
import Header from "./components/Header/Header";
import Shows from "./components/Shows/Shows";
import { Route, Routes } from "react-router-dom";
import { OneMovie } from "./components/OneMovie/OneMovie";

function App() {
  return (
    <div className="root">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/movies/:id/:title" element={<OneMovie props={""} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
