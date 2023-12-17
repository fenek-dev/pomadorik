import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [active, setActive] = useState(initialValue);

  const toggle = () => setActive((v) => !v);

  return [active, toggle] as const;
};
