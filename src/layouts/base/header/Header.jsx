import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";

function Header({ onOpenNav }) {
  return (
    <>
      <header className="bg-white flex gap-x-4 md:divide-x  items-center px-4 md:py-4 py-2 shadow">
        <h1 className="transition ease-in duration-200 hover:text-blue-900 text-sm xs:grow uppercase tracking-widest font-bold">
          <Link
            to="/about"
            className="transition ease-in duration-200 hover:text-blue-900 text-sm uppercase tracking-widest"
          >
            Aidos Kanapyanov
          </Link>
        </h1>
        <HeaderLinks />
        <button onClick={onOpenNav} className="md:hidden ml-auto">
          ☰
        </button>
      </header>
    </>
  );
}

export default Header;
