import React from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavItem>Home</NavItem>
        <NavItem>Characters</NavItem>
        <NavItem>Monsters</NavItem>
        <NavItem>About</NavItem>
      </ul>
    </nav>
  );
}
