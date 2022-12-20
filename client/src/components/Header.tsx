import Sidebar from "./Sidebar";
import "./Header.css";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="header bg-slate-800 p-3 font-bold text-3xl text-gray-400">
      <ul className="flex justify-between items-center">
        <li>
          <Sidebar />
        </li>
        <li>
          <h1>Taos Menus</h1>
        </li>
        <li>
          <a href="#">
            <FaUser />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
