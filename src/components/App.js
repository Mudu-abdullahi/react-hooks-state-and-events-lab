import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Grocery List</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
