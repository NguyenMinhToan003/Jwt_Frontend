// import { ADD_TASK, TOGGLE_TASK } from "./actions";

// const initialState = {
//   tasks: [],
// };

// export function tasksReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           { id: Date.now(), name: action.payload, completed: false },
//         ],
//       };
//     case TOGGLE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload
//             ? { ...task, completed: !task.completed }
//             : task
//         ),
//       };
//     default:
//       return state;
//   }
// }

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
