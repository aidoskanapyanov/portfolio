export default function Navbar({ openNav, onCloseNav }) {
  const navLinks = [
    {
      name: "Aidos Kanapyanov",
      href: "/",
    },
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
        <ul className="flex flex-col gap-y-4 divide-y mt-8">
          {navLinks.map((link) => {
            return (
              <li key={link.name} className="pt-4">
                <a
                  href={link.href}
                  className="hover:text-blue-900 text-sm uppercase tracking-widest font-medium pr-10"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
