import React from "react";
import Item from "./Item";

export default function DisplayItems({ items, children }) {
  
  items = items.slice(0,4);
  
  return (
    <div className="display-items">
      <div className="new-arrivals-title"> {children} </div>
      <div className="new-arrivals-items">
        {items.map((item) => (
          <Item item={item} key={item.id}></Item>
        ))}
      </div>
      <button className="view-all">View All</button>
    </div>
  );
}
