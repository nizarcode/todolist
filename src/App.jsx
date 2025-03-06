import { useState, useEffect } from "react";

import Header from "./componets/header";
import ListTodo from "./componets/list-todo";
import { ModalTodo } from "./componets/modal-todo";
import Footer from "./componets/footer";

let defaultList = [
  {
    id: 1,
    todoName: "Cook for dinner",
    time: "05:15",
    checked: false,
  },
  { id: 2, todoName: "Grocery shoping", time: "10:00", checked: false },
  { id: 3, todoName: "Washing clothes", time: "07:30", checked: true },
];

export default function App() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todolistStorage")
      ? JSON.parse(localStorage.getItem("todolistStorage"))
      : []
  );
  const [language, setLanguage] = useState("en");

  function handleAddTodo(todos) {
    const filteredTodoList = todoList.filter(
      (todo) => todo.id !== todos.previousID
    );
    setTodoList([...filteredTodoList, todos]);
  }
  function handleDelete(id) {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodoList);
  }

  function handleDeleteAll() {
    setTodoList([]);
  }
  function handleChecked(id) {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  function handleChangeLang() {
    language === "en" ? setLanguage("jp") : setLanguage("en");
  }
  function handleHoldLang() {
    language === "en" ? setLanguage("en") : setLanguage("jp");
  }
  useEffect(() => {
    const storedTodolist = localStorage.getItem("todolistStorage");
    if (storedTodolist) {
      setTodoList(JSON.parse(storedTodolist));
    } else {
      setTodoList(defaultList);
      localStorage.setItem("todolistStorage", JSON.stringify(defaultList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todolistStorage", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <Header
        todoList={todoList}
        onChangeLang={handleChangeLang}
        onHoldLang={handleHoldLang}
        lang={language}
      />
      <ListTodo
        todoList={todoList}
        onChecked={handleChecked}
        onDelete={handleDelete}
        onDeleteAll={handleDeleteAll}
        onAddTodo={handleAddTodo}
        lang={language}
      />
      <ModalTodo onAddTodo={handleAddTodo} lang={language} />
      <Footer />
    </>
  );
}
