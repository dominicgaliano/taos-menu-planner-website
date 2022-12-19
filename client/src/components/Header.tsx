import Sidebar from "./Sidebar";

function Header() {
  return (
    <div className="Header">
      <ul className="flex">
        <li className="mr-6">
          <Sidebar />
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Active
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
