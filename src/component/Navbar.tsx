import logo from "./assets/white-logo-horizontal.3f002309.webp"
const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-transparent p-1 fixed flex justify-between w-full">
      <div className="w-full md:block md:w-auto">
        <a
          href="https://www.mettlestate.com/"
          className="flex items-center p-4 mt-4"
        >
          <img
            src={logo}
            className="h-8"
            alt="Mattlestate Logo"
          />
        </a>
      </div>
      <div className="w-full md:block md:w-auto">
        <ul className="font-medium flex p-4 mt-4 rounded-lg flex-row">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white hover:text-blue-600"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#event"
              className="block py-2 px-3 text-white hover:text-blue-600"
            >
              Event
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white hover:text-blue-600"
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white hover:text-blue-600"
            >
              Leaderboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white hover:text-blue-600"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
