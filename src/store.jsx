import { createStore } from "redux";
import { financeReducer } from "./financeReducer";
const initialState={income:0,expenses:0}

export default createStore(financeReducer)