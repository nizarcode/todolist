import { useState } from "react";
import TodoCard from "./todo-card";
import { BsPencilSquare, BsX } from "react-icons/bs";

export default function ListTodo({
  todoList,
  onChecked,
  onDelete,
  onAddTodo,
  onDeleteAll,
  onEdit,
  lang,
}) {
  let todoCompleted = todoList.filter((todo) => todo.checked == true);
  let todoUncompleted = todoList.filter((todo) => todo.checked == false);
  const [todoName, setTodoName] = useState("");
  const [time, setTime] = useState("");
  const [previousID, setPreviousID] = useState(0);
  let sortedTodo = todoUncompleted
    .slice()
    .sort(
      (a, b) => parseInt(a.time.split(":")[0]) - parseInt(b.time.split(":")[0])
    );

  function handleEdit(id, name, time) {
    setPreviousID(id);
    setTodoName(name);
    setTime(time);
    console.log(`id adalah ${id}`);

    document.getElementById("modal-edit").classList.toggle("hidden");
    document.getElementById("masking").classList.toggle("hidden");
  }
  function handleClose() {
    document.getElementById("modal-edit").classList.toggle("hidden");
    document.getElementById("masking").classList.toggle("hidden");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!todoName) return;
    const newTodo = {
      todoName,
      time,
      checked: false,
      id: Date.now(),
      previousID,
    };
    onAddTodo(newTodo);

    setTodoName("");
    setTime("");
    handleClose();
  }

  return (
    <section id="task" className="mt-2 pt-4 px-4 pb-24">
      <div className="container mx-auto">
        <h5 className="text-sky-400 font-semibold text-lg mb-3 w-[90%] mx-auto">
          {lang === "en" ? (
            todoList.length === 0 ? (
              <span className="block">
                Let's make a to-do list for today 🥰
              </span>
            ) : (
              <span>Today Todo list : {todoUncompleted.length}</span>
            )
          ) : todoList.length === 0 ? (
            <span className="block">今日のやりたいことを記録しよう 🥰</span>
          ) : (
            <span>今日のやること : {todoUncompleted.length}</span>
          )}
        </h5>
        <ul>
          {sortedTodo.map((todo) => (
            <TodoCard
              todo={todo}
              key={todo.id}
              onChecked={onChecked}
              onDelete={onDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
        <h5 className="text-sky-400 mt-6 font-semibold text-lg mb-3 w-[90%] mx-auto">
          {todoList.length != 0 ? (
            lang == "en" ? (
              <span>Completed things : {todoCompleted.length}</span>
            ) : (
              <span>完成こと : {todoCompleted.length}</span>
            )
          ) : (
            ""
          )}
        </h5>
        <ul>
          {todoCompleted.map((todo) => (
            <TodoCard
              todo={todo}
              key={todo.id}
              onChecked={onChecked}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      </div>
      {todoList.length != 0 ? (
        <div className="text-center mt-8">
          <button
            onClick={onDeleteAll}
            className=" text-sky-400 text-sm  transition duration-500 active:translate-y-1 active:shadow-sm"
          >
            <span className="after:content-[''] after:block after:w-0 after:h-0.5 rounded-full after:bg-sky-400 after:transition-all after:duration-500 hover:after:w-full">
              Clear all
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        id="modal-edit"
        className="bg-sky-50 w-[80%] h-80 fixed hidden top-10 z-20  right-[10%] rounded-lg shadow-md p-8"
      >
        <div>
          <a
            onClick={handleClose}
            className="absolute top-3 text-sky-800 right-3 hover:scale-125 transition duration-300 active:scale-90 active:text-sky-800 hover:text-sky-400"
          >
            <BsX className="text-2xl font-bold" />
          </a>
          <h2 className="text-center text-xl font-semibold text-sky-800 tracking-wide">
            {lang === "en" ? "Edit Todo" : "やることを編集"}
            <BsPencilSquare className="inline text-lg -mt-[2px] text-sky-700 ml-1" />
          </h2>
          <div className="mt-5">
            <form onSubmit={handleSubmit} className="mt-6" method="dialog">
              <input type="hidden" name="previousID" value={previousID} />
              <label className="text-lg font-semibold text-sky-800">
                {lang == "en"
                  ? "What are you planning?"
                  : "今日は何をしますか？"}
              </label>
              <input
                name="todoName"
                type="text"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4"
                autoFocus={true}
                required
                placeholder={lang === "en" ? "todo . . " : "やること。。"}
              />
              <div class="relative w-32">
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="time"
                  id="time"
                  class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="py-2 hover:shadow-md rounded-lg px-4 bg-sky-600 block mx-auto text-white shadow-sm hover:opacity-70 active:translate-y-1 ease-in-out transition duration-500 mt-4 w-40"
              >
                {lang === "en" ? "Update todo" : "編集するする"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        id="masking"
        className=" w-full h-full fixed top-0 left-0 bg-black bg-opacity-70 hidden z-10"
      ></div>
    </section>
  );
}
