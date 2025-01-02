import { useCallback, useState } from 'react';

const useToggleState = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback((value?: boolean) => {
    if (typeof value === 'boolean') setState(value);
    else {
      setState((prev) => !prev);
    }
  }, []);
  return [state, toggle] as const;
};

export default useToggleState;
