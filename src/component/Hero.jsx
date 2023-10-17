import React from "react";

export default function Hero(props) {
  return (
    <div>
      <ol>
        <li>Name:{props.item['name']}</li>
        <li>Name:{props.item['age']}</li>
        <li>Name:{props.item['city']}</li>
      </ol>

    </div>
  );
}
