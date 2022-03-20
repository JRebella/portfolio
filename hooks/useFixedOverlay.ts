// Small utility hook for window overlays that shift the user's focus away from the main content. Like a modal or popup menu
// Will prevent scrolling within the body element

import { useEffect } from "react";

type UseFixedOverlay = (
  /** Whether the overlay is open or not */
  isOverlayOpen: boolean
) => void;

const useFixedOverlay: UseFixedOverlay = (isOverlayOpen) => {
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOverlayOpen]);
};

export default useFixedOverlay;
