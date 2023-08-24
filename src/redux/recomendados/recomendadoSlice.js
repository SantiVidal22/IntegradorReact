import { createSlice } from "@reduxjs/toolkit";
import { recomendados } from "../../data/Recomendados";
const INITIAL_STATE = {
  recomendados: recomendados,
};
export const recomendadosSlice = createSlice({
  name: "recomendados",
  initialState: INITIAL_STATE,
  reducers: {
    getrecomendados: (state) => {
      return state;
    },
  },
});

export const { getRecomendados } = recomendadosSlice.actions;

export default recomendadosSlice.reducer;