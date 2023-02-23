export default function HeaderLinks() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
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
              <a
                href={link.href}
                className="hover:text-blue-900 text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
