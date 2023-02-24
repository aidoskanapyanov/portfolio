import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";

export default function BaseLayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header onOpenNav={() => setOpen(true)} />
      <Navbar openNav={open} onCloseNav={() => setOpen(false)} />
      <article className="bg-white shadow my-10 md:m-10">
        <Outlet />
      </article>
    </>
  );
}
