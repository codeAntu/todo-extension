import { useState } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import ShowTodo from "./component/ShowTodo";

function App() {
  return (
    <div className="bg-black text-white w-[270px] px-3 py-4 h-[350px] flex flex-col justify-between gap-3 ">
      <ShowTodo />
      <AddTodo />
    </div>
  );
}

export default App;
