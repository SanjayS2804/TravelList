
export function Item({ item, deleteIt, change }) {
  return (<li>
    <input type="checkbox" value={item.packed}
      onChange={() => change(item.id)} />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
    <button onClick={() => deleteIt(item.id)}>❌</button></li>);
}
