import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import Switcher from "../../../components/Switcher";
import useHideHeader from "../../../hooks/useHideHeader";

function Header({ onOpenNav }) {
  const [visible] = useHideHeader();

  return (
    <>
      <header
        className={`sticky top-0 ${
          visible ? "" : "-translate-y-full"
        } transition-transform ease-in duration-200 bg-white dark:bg-slate-800 dark:text-white flex gap-x-4 md:divide-x  items-center p-4 shadow`}
      >
        <h1 className="transition ease-in duration-200 hover:text-blue-900 dark:hover:text-blue-300 text-sm xs:grow uppercase tracking-widest font-bold">
          <Link to="/about" className="text-sm uppercase tracking-widest">
            Aidos Kanapyanov
          </Link>
        </h1>
        <HeaderLinks />
        <Switcher />
        <button onClick={onOpenNav} className="md:hidden">
          ☰
        </button>
      </header>
    </>
  );
}

export default Header;
