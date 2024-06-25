import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Body from "./components/Home/Body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Body/>
      </main>
    </div>
  );
}

export default App;
