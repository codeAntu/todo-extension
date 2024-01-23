import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Plus } from "lucide-react";
import { addTodo } from "../redux/todoSlice";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  function addTodoHandler() {
    dispatch(addTodo(todo));
    setTodo("");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex justify-between items-center gap-2">
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          e.preventDefault();
          setTodo(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodoHandler();
          }
        }}
        ref={inputRef}
        placeholder="Add Todo"
        className="bg-white/10 rounded-lg w-full border border-white/5 flex-grow py-1 pl-2 opacity-80 text-base"
      />
      <button
        onClick={addTodoHandler}
        className="bg-blue-700 rounded-full p-1 "
      >
        <Plus />
      </button>
    </div>
  );
}
