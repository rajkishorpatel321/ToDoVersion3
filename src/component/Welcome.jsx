import { useContext } from "react";
import { TodoContext } from "../store/todo-item-store";

let Welcome = () => {
  let { items } = useContext(TodoContext);
  console.log(items);
  return items.length === 0 && <h6>No Work Any More</h6>;
};

export default Welcome;
