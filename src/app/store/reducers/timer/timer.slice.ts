import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TimerVariants } from "./timer.const";

export interface TimerState {
  POMADORO_TIME: number;
  REST_TIME: number;
  variant: TimerVariants;
}

const initialState: TimerState = {
  POMADORO_TIME: 0,
  REST_TIME: 300,
  variant: TimerVariants.POMADORO_TIME,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<TimerVariants>) => {
      state.variant = action.payload;
    },
    forward: (state, action: PayloadAction<number>) => {
      if (state.variant === TimerVariants.POMADORO_TIME) {
        state.REST_TIME = Math.floor(action.payload / 5);
        state.variant = TimerVariants.REST_TIME;
      } else {
        state.POMADORO_TIME = 0;
        state.variant = TimerVariants.POMADORO_TIME;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeVariant, forward } = timerSlice.actions;

export default timerSlice.reducer;
