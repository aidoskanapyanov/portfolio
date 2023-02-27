import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import Sidebar from "./sidebar/Sidebar";

export default function BaseLayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header onOpenNav={() => setOpen(true)} />
      <Navbar openNav={open} onCloseNav={() => setOpen(false)} />
      <div className="flex xl:flex-row-reverse flex-col divide-y">
        <article className="lg:basis-3/4 basis-full bg-white shadow my-10 md:m-10">
          <Outlet />
        </article>
        <Sidebar />
      </div>
    </>
  );
}
