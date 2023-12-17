import { useEffect } from "react";
import {
  BehaviorSubject,
  NEVER,
  Subject,
  interval,
  map,
  share,
  switchMap,
  takeUntil,
  takeWhile,
} from "rxjs";
import { useObservable } from "../../shared/hooks";

const stop$ = new Subject();
const isPaused$ = new BehaviorSubject(false);

const timerValue$ = new BehaviorSubject(0);

const timer$ = isPaused$.pipe(
  switchMap((paused) => (paused ? NEVER : interval(100))),
  map(() => {
    const curr = timerValue$.getValue();
    timerValue$.next(curr - 0.1);
    return curr;
  }),
  takeWhile((v) => v >= 0),
  takeUntil(stop$),
  share()
);

const toggle = () => {
  isPaused$.next(!isPaused$.getValue());
};

const restart = () => {
  timerValue$.next(0);
  isPaused$.next(false);
};

interface useCountDownArgs {
  time: number;
  initialText?: string;
}

export const useCountDown = ({ time }: useCountDownArgs) => {
  const value = useObservable(timer$);
  const isPaused = useObservable(isPaused$);

  useEffect(() => {
    timerValue$.next(time);
  }, [time]);

  useEffect(() => {
    console.log(value);

    if (value && value <= 0) {
      isPaused$.next(true);
      timerValue$.next(time);
    }
  }, [value, time]);

  return {
    toggle,
    restart,
    value: ((value || 1) * 100) / time,
    isPaused,
    remains: value,
  };
};
