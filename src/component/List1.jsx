import { useContext } from "react";
import style from "./List1.module.css";
import { TodoContext } from "../store/todo-item-store";

const List1 = ({ item, onDelete }) => {
  const { itemDelete } = useContext(TodoContext);
  return (
    <>
      <div className={`col-4 ${style.bgColour}`}>{item.name}</div>
      <div className={`col-4 ${style.bgColour}`}>{item.dueDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger todo-btn"
          onClick={() => {
            itemDelete(item.name);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default List1;
