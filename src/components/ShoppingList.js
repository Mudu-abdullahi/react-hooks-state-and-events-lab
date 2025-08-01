import React, { useState } from "react";
import Item from "./Item";
import items from "../data/items"; // Adjust this path if needed

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const visibleItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {visibleItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
