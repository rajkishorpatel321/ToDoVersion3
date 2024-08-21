import Heading from "./component/heading";
import InHead from "./component/InHead";
import Item from "./component/Item";
import "./App.css";
import Welcome from "./component/Welcome";
import TodoContestProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoContestProvider>
      <center className="example">
        <Heading />
        <InHead />
        <Welcome></Welcome>
        <Item></Item>
      </center>
    </TodoContestProvider>
  );
}

export default App;
