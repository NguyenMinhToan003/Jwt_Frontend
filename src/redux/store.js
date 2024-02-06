// import { createStore } from "redux";
// import { tasksReducer } from "./reducers";

// const store = createStore(tasksReducer);

// export default store;

import { createStore } from "redux";
import counterReducer from "./CounterReducer";

const store = createStore(counterReducer);

export default store;
