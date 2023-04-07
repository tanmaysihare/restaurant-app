import React from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header></Header>
      <main>
        <Meals />
      </main>
      </React.Fragment>
  );
}

export default App;
