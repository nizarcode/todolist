"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";
import {
  HiOutlinePlus,
  HiClipboardList,
  HiOutlinePencil,
} from "react-icons/hi";

export function ModalTodo({ onAddTodo, lang }) {
  const [openModal, setOpenModal] = useState(false);
  const [todoName, setTodoName] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todoName) return;
    const newTodo = { todoName, time, checked: false, id: Date.now() };
    onAddTodo(newTodo);

    setTodoName("");
    setTime("");
    setOpenModal(false);
  }

  return (
    <>
      <a
        onClick={() => setOpenModal(true)}
        className="p-3 text-2xl bg-sky-600 hover:bg-sky-400 rounded-full fixed right-7 bottom-32 lg:bottom-28  transition duration-500 text-white cursor-pointer active:scale-90"
      >
        <HiOutlinePlus />
      </a>
      <Modal
        show={openModal}
        size="lg"
        onClose={() => setOpenModal(false)}
        popup
        position="center"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="my-auto">
            <div className="flex items-center justify-center">
              <h3 className="font-bold text-2xl text-slate-700 text-center">
                {lang === "en" ? "Add new task" : "新しい活動を足す"}
              </h3>
              <HiClipboardList className="inline ml-2 text-3xl text-sky-500" />
              <HiOutlinePencil className="inline -ml-1 -mt-1 text-lg text-sky-500" />
            </div>
            <form onSubmit={handleSubmit} className="mt-6" method="dialog">
              <label className="text-lg font-semibold text-sky-800">
                {lang === "en"
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
                className="py-2 hover:shadow-md rounded-lg px-4 bg-sky-600 block mx-auto text-white shadow-sm hover:opacity-70 active:translate-y-1 ease-in-out transition duration-500 mt-4 w-full"
              >
                {lang === "en" ? "Add todo" : "追加する"}
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
