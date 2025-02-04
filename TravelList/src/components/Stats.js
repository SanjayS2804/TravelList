export function Stats({ items }) {
  if (items.length === 0) {
    return <footer className="stats"><em>Add something to your bag 🚀</em></footer>;
  }
  const len = items.length;
  const packed = items.filter(item => item.packed).length;
  const per = Math.round((packed / len) * 100);

  return <footer className="stats">
    {per === 100 ? <em>You are packed and set to travel ✈️🧳</em> : <em>💼You have {len} items in list and you already packed {packed} ({per}%)</em>}

  </footer>;
}
