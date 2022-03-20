// Small utility hook to keep track of scrolling behavior by the user

import { throttle } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";

type ScrollState = "top" | "up" | "down";

type UseScroll = (
  /** The frequency at which scroll position state will be updated, in MS (default 500ms) */
  readFrequency?: number,
  /** The tolerance range in PX needed to detect a top state */
  tolerance?: number
) => {
  /** The latest recorded scrolling state, top means top of the page, up means upward, down is downward */
  state: ScrollState;
};

const useScroll: UseScroll = (readFrequency = 500, tolerance = 40) => {
  const [scrollState, setScrollState] = useState<ScrollState>("top");
  const lastYPosition = useRef<number>(0);

  const scrollListener = useCallback(
    throttle(() => {
      const { scrollY } = window;
      if (scrollY - tolerance <= 0) {
        setScrollState("top");
      } else if (scrollY < lastYPosition.current) {
        setScrollState("up");
      } else {
        setScrollState("down");
      }

      lastYPosition.current = scrollY;
    }, readFrequency),
    []
  );

  useEffect(() => {
    window.removeEventListener("scroll", scrollListener);
    scrollListener();
    window.addEventListener("scroll", scrollListener);
  }, [scrollListener]);

  return {
    state: scrollState,
  };
};

export default useScroll;
