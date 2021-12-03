import React from "react";

export default function NavItem(props) {
  return (
    <li>
      <a href="#">{props.children}</a>
    </li>
  );
}
