import { Link } from "react-router-dom";

export default function Navbar({ openNav, onCloseNav }) {
  const navLinks = [
    {
      name: "Site",
      href: "/site",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  return (
    <>
      <div
        className={`${
          openNav ? "block" : "hidden"
        } fixed right-0 top-0 h-screen z-[999] bg-white pl-8 pr-4 py-2`}
      >
        <div className="flex justify-end">
          <button className="block right-0" onClick={onCloseNav}>
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-y-4 divide-y pr-4 mt-8">
          {navLinks.map((link) => {
            return (
              <li key={link.name} className="pt-4">
                <Link
                  onClick={onCloseNav}
                  to={link.href}
                  className="transition ease-in duration-200 hover:text-blue-900 text-sm uppercase tracking-widest font-medium pr-10"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
