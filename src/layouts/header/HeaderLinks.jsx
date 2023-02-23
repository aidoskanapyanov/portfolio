import { Link } from "react-router-dom";

export default function HeaderLinks() {
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
    <div className="hidden sm:block">
      <ul className="flex gap-x-4 divide-x">
        {navLinks.map((link) => {
          return (
            <li key={link.name} className="pl-4">
              <Link
                to={link.href}
                className="hover:text-blue-900 text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
