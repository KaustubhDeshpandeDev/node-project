import React from "react";

export default function button(props) {
  return <button onClick={() => props.handleClick(props.element)}>Add</button>;
}
