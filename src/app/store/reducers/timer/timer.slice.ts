import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TimerVariants } from "./timer.const";

export interface TimerState {
  POMADORO_TIME: number;
  LONG_REST_TIME: number;
  SHORT_REST_TIME: number;
  variant: TimerVariants;
}

const initialState: TimerState = {
  POMADORO_TIME: 1500,
  LONG_REST_TIME: 2400,
  SHORT_REST_TIME: 300,
  variant: TimerVariants.POMADORO_TIME,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<TimerVariants>) => {
      state.variant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeVariant } = timerSlice.actions;

export default timerSlice.reducer;
