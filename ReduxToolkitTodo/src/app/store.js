import { configureStore } from "@reduxjs/toolkit";

import todoReduce from "../feature/todo/todoSlice";

const store = configureStore({
  reducer: todoReduce,
});
export default store;
