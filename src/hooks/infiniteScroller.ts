import { useEffect } from "react";
import throttle from "lodash/throttle";

export const useInfiniteScroller = (cb: () => void) => {
  useEffect(() => {
    const callback = throttle(cb, 400, { leading: true, trailing: false });

    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

      callback();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line
};
