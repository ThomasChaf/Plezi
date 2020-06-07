import { useEffect } from "react";
import debounce from "lodash/debounce";

export const useInfiniteScroller = (cb: () => void) => {
  const callback = debounce(cb, 400);

  const handleScroll = debounce(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

    callback();
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
};
