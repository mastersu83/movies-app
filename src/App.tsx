import React from "react";
import Header from "./components/Header/Header";
import Shows from "./components/Shows/Shows";

function App() {
  return (
    <div className="root">
      <Header />
      <main className="content">
        <Shows />
      </main>
    </div>
  );
}

export default App;
