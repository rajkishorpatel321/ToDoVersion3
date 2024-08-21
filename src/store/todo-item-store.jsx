import { createContext, useReducer } from "react";

export const TodoContext = createContext([]);

const todoItemReducer = (curruntItem, action) => {
  let newItem = curruntItem;
  console.log(action);
  if (action.typeof === "NEW_ITEM") {
    newItem = [
      ...curruntItem,
      { name: action.payload.inputvalue, dueDate: action.payload.dueDate },
    ];
  } else if (action.typeof === "DELETE_ITEM") {
    newItem = curruntItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newItem;
};

const TodoContestProvider = ({ children }) => {
  const [items, dispatchTodoItems] = useReducer(todoItemReducer, []);

  let addItem = ({ inputvalue, dateValue }) => {
    const newItemAction = {
      typeof: "NEW_ITEM",
      payload: { inputvalue, dateValue },
    };
    dispatchTodoItems(newItemAction);
  };
  let itemDelete = (itemName) => {
    const deleteItemAction = {
      typeof: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoContext.Provider value={{ items, itemDelete, addItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContestProvider;
