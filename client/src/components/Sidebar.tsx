import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

function Sidebar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Item 1
      </a>
      <a className="menu-item" href="/salads">
        Item 2
      </a>
      <a className="menu-item" href="/pizzas">
        Item 3
      </a>
      <a className="menu-item" href="/desserts">
        Item 4
      </a>
    </Menu>
  );
}

export default Sidebar;
