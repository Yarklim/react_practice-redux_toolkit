import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  currentStep: 0,
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {},
})
