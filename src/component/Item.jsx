import { useContext } from "react";
import List1 from "./List1";
import style from "./item.module.css";
import { TodoContext } from "../store/todo-item-store";
const Item = ({ onDelete }) => {
  const { items } = useContext(TodoContext);
  return (
    <div className={`${style.bgColour} container text-center`}>
      <div className={`${style.bgColour}  row`}>
        {items.map((item) => (
          <List1 item={item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
export default Item;

// container text-center
