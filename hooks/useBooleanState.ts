// Small utility hook for managing a boolean state true/false

import { Dispatch, SetStateAction, useCallback, useState } from "react";

type UseBooleanState = (
  /** Initial state*/
  initialState?: boolean
) => [boolean, () => void, Dispatch<SetStateAction<boolean>>];

const useBooleanState: UseBooleanState = (initialState) => {
  const [state, setState] = useState<boolean>(initialState || false);

  const toggleState = useCallback(() => {
    setState((currentState) => !currentState);
  }, []);

  return [state, toggleState, setState];
};

export default useBooleanState;
