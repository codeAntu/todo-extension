import { Check, Delete, Drumstick, Edit, Pencil, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";
import { useEffect, useRef, useState } from "react";

export default function ShowTodo() {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  return (
    <div className=" overflow-scroll overflow-hide p-1">
      <div className="text-lg font-medium text-center pb-3 opacity-80">
        {" "}
        Todos{" "}
      </div>
      <div className="space-y-2 ">
        {todos.map((todo: any) => (
          <div
            key={todo.id}
            className={`${
              todo.completed ? " bg-white/5" : "bg-white/10"
            } hover:bg-white/20 transition px-3 py-1.5 rounded-md flex items-center justify-between group/item`}
          >
            <div className=" flex items-center  gap-1 w-[70%]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={todo.completed}
                  onChange={() => {
                    dispatch(toggleTodo(todo.id));
                  }}
                />
                <span
                  className={`w-4 h-4 mr-2 border rounded ${
                    todo.completed ? "bg-blue-500" : ""
                  }`}
                >
                  {todo.completed ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    ""
                  )}
                </span>
              </label>
              <div
                className={
                  `  text-base line-clamp-1 ${
                    todo.completed ? "opacity-40" : "opacity-70"
                  }` + ""
                }
              >
                {todo.text}
              </div>
            </div>
            <div className=" flex items-center justify-between gap-3 group-hover/item:visible invisible ">
              <Pencil
                size={18}
                className="cursor-pointer opacity-60"
                onClick={() => {}}
              />
              <Trash2
                size={20}
                className="text-red-700 cursor-pointer"
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
