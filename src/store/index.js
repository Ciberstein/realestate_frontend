import { configureStore } from "@reduxjs/toolkit";
import properties  from "./slices/properties.slice";

const store = configureStore({
  reducer: {
    properties
  }
});

export default store;