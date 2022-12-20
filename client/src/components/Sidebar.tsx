import { ReactBurgerMenu, slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

// TODO: Implement conditional sidebar for admins
// TODO: Add logo image to sidebar
// TODO: Implement routing
function Sidebar() {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a className="menu-item" href="/">
        Login
      </a>
      <a className="menu-item" href="/">
        Daily Menus
      </a>
      <a className="menu-item" href="/">
        Voting
      </a>
      <a className="menu-item" href="/">
        Cook Feedback
      </a>
      <a className="menu-item" href="/">
        Resident Feedback
      </a>
    </Menu>
  );
}

export default Sidebar;
