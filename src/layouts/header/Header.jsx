import HeaderLinks from "./HeaderLinks";

function Header({ onOpenNav }) {
  return (
    <>
      <header className="bg-white flex gap-x-4 sm:divide-x  items-center px-4 sm:py-4 py-2 shadow">
        <h1 className="hover:text-blue-900 text-sm xs:grow uppercase tracking-widest font-bold">
          <a
            href="/"
            className="hover:text-blue-900 text-sm uppercase tracking-widest"
          >
            Aidos Kanapyanov
          </a>
        </h1>
        <HeaderLinks />
        <button onClick={onOpenNav} className="sm:hidden ml-auto">
          ☰
        </button>
      </header>
    </>
  );
}

export default Header;
