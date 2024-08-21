import { useContext } from "react";
import { useRef } from "react";
import { TodoContext } from "../store/todo-item-store";

function InHead() {
  const { addItem } = useContext(TodoContext);
  let inputVal = useRef();
  let dateVal = useRef();

  let dataToParant = () => {
    let inputvalue = inputVal.current.value;
    let dateValue = dateVal.current.value;
    inputVal.current.value = "";
    dateVal.current.value = "";
    addItem({ inputvalue, dateValue });
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={inputVal}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={dateVal} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-btn"
            onClick={dataToParant}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default InHead;
