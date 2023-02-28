import { useEffect, useState } from "react";

export default function useHideHeader() {
  const [scrollVisible, setScrollVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const visible = scrollY <= lastScrollY;
      if (
        visible !== scrollVisible &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollVisible(visible);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollVisible]);

  return scrollVisible;
}
