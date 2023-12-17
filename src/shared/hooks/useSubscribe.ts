import React, { useEffect } from "react";
import { Observable } from "rxjs";

export const useSubscribe = <T>(
  ob: Observable<T>,
  deps?: React.DependencyList | undefined
) => {
  useEffect(() => {
    const subscription = ob.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, deps);
};
