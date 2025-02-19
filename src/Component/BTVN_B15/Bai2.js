// // import React, { useReducer, useState } from "react";

// // const DATA = [
// //   { id: 1, title: "Danh rang", completed: false },
// //   { id: 2, title: "An Sang", completed: false },
// //   { id: 3, title: "Di hoc", completed: false },
// // ];

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case "ADD_TODO":
// //       return [
// //         ...state,
// //         { id: Date.now(), text: action.text, completed: false },
// //       ];
// //     case "TOGGLE_TODO":
// //       return state.map((todo) =>
// //         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
// //       );
// //     case "DELETE_TODO":
// //       return state.filter((todo) => todo.id !== action.id);

// //     default:
// //       return state;
// //   }
// // };

// // const Bai2 = () => {
// //   const [state, dispatch] = useReducer(reducer, DATA);
// //   const [input, setInput] = useState("");

// //   console.log("state", state);

// //   const addTodo = () => {
// //     if (input.trim() !== "") {
// //       dispatch({ type: "ADD_TODO", text: input });
// //       setInput("");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Todo List</h2>
// //       <input
// //         type="text"
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //       />
// //       <button onClick={addTodo}>Add</button>
// //       <button onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}>
// //         Delete
// //       </button>
// //     </div>
// //   );
// // };

// // export default Bai2;

// import React, { useReducer, useState } from "react";

// const DATA = [
//   { id: 1, title: "Đánh răng", completed: false },
//   { id: 2, title: "Ăn sáng", completed: false },
//   { id: 3, title: "Đi học", completed: false },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [
//         ...state,
//         { id: Date.now(), title: action.text, completed: false },
//       ];

//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );

//     case "DELETE_TODO":
//       return state.filter((todo) => todo.id !== action.id);

//     default:
//       return state;
//   }
// };

// const Bai2 = () => {
//   const [state, dispatch] = useReducer(reducer, DATA);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     if (input.trim() !== "") {
//       dispatch({ type: "ADD_TODO", text: input });
//       setInput("");
//     }
//   };

//   // console.log("state", state);

//   return (
//     <div>
//       <h2> Todo List</h2>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Nhập công việc..."
//       />
//       <button onClick={addTodo}> Add</button>

//       <ul>
//         {state.map((todo) => (
//           <li key={todo.id}>
//             <span
//               onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
//             >
//               {todo.title}
//             </span>
//             <button
//               onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Bai2;

import React, { useReducer } from "react";

const FAKE_DATA = [
  {
    id: "CV1",
    name: "quet nha",
    isDone: false,
  },
  {
    id: "CV2",
    name: "an sang",
    isDone: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        id: `CV${state?.length + 1}`,
        name: `Cong viec thu ${state?.length + 1}`,
        isDone: false,
      };
      return [...state, newTodo];

    case "REMOVE":
      return state?.filter((item) => item.id !== action.id);

    case "TICK_DONE":
      return state?.map((item) => {
        if (item.id === action.id) {
          return { ...item, isDone: item?.isDone ? false : true };
          // return { ...item, isDone: !item?.isDone };
        }
        return item;
      });

    default:
      return state;
  }
};

const Bai2 = () => {
  const [Todolist, dispatch] = useReducer(reducer, FAKE_DATA);

  const onAdd = () => {
    dispatch({ type: "ADD" });
  };
  const onRemove = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const onToggleDone = (id) => {
    dispatch({ type: "TICK_DONE", id });
  };
  const renderTodoList = () => {
    return Todolist?.map((todo) => {
      return (
        <tr key={todo}>
          <td>{todo?.id}</td>
          <td>{todo?.name}</td>
          <td>{todo?.isDone ? "DONE" : "NOT DONE"}</td>
          <td>
            <button onClick={() => onRemove(todo?.id)}>Remove</button>
            <button onClick={() => onToggleDone(todo?.id)}>Tick Done</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <button onClick={onAdd}>Add new</button>
      <table border={"1px"}>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th> IS DONE</th>
          <th> ACTION</th>
        </tr>
        {renderTodoList()}
      </table>
    </div>
  );
};

export default Bai2;
