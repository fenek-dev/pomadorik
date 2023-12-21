import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [active, setActive] = useState(initialValue);

  const toggle = (value?: boolean) => {
    if (value) setActive(value);
    else setActive((v) => !v);
  };

  return [active, toggle] as const;
};
