import { useState, useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(
  observable: Observable<T>,
  trigger?: unknown
) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable, trigger]);

  return state;
};
