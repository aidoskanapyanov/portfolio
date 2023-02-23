import { useState } from "react";
import Header from "./layouts/header";
import Navbar from "./layouts/navbar";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header onOpenNav={() => setOpen(true)} />
      <Navbar openNav={open} onCloseNav={() => setOpen(false)} />
    </>
  );
}
