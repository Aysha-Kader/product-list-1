import React, { useState } from "react";

import Card from "./Card";
import Products from "./Products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  const [sort, setSort] = useState("");

  const addToCart = (name) => console.log("Added:", name);

  const items = Products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .filter((p) =>  (category === "All" ? true : p.category === category))
        
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center ">Product List</h1>

      <input  
        placeholder="Search..."
        className="border border-blue-500 p-2 w-full mb-3 "
            onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3 border border-blue-500"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Category A</option>
        <option>Category B</option>
      </select>

      <select
        className="border p-2 w-full mb-5 border border-blue-500"
        onChange={(e) => setSort(e.target.value)}
      >
            <option value="">Sort By</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((p) => (
          <Card key={p.id} {...p} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
