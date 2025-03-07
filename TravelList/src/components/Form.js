import { useState } from "react";

export default function Form({ set }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), packed: false };
    setDescription("");
    setQuantity(1);
    set(newItem);
  }

  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip ?🏖️</h3>
    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
        <option value={num} key={num}>{num}</option>
      ))}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
    <button>Add</button>
  </form>;
}
