import { useState } from "react";
import  Logo  from "./Logo";
import  Form  from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Shirts", quantity: 12, packed: true }
// ];
export default function App()
{
  const [items,setItems]=useState([]);

  function handleItem(item)
  {
    setItems((items)=>[...items,item]);
  }

  function deleteItems(id)
  {
    setItems((items)=>items.filter((item)=>item.id!==id));
  }

  function toggleItem(id)
  {
    setItems((items)=>items.map(item=>item.id===id ? {...item,packed:!item.packed} : item))
  }

  function clearList()
  {
    const confirm=window.confirm("Are you sure you want to delete all items?")
    if(confirm)  setItems([]);
    
  }

  return <div className="app">
    <Logo/>
    <Form set={handleItem}/>
    <PackingList 
    items={items} 
    deleteItem={deleteItems} 
    change={toggleItem}
    clear={clearList}
    />
    <Stats items={items}/>
    </div>
}

