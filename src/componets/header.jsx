import { Dropdown } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
export default function Header({ todoList, onChangeLang, lang, onHoldLang }) {
  let date = new Date();
  let currentDate = date.toDateString();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return (
    <section
      id="header"
      className="  bg-[url('hero-img.jpg')]  shadow-sm shadow-sky-700  text-white bg-left rounded-b-sm"
    >
      <div className="flex justify-between px-4 py-6">
        <h2 className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {lang === "en" ? (
            <span className="font-semibold">Hi, Welcome 😊</span>
          ) : (
            <span className="font-semibold">こんにちは！😊</span>
          )}
        </h2>
        <Dropdown
          label="Language"
          inline
          renderTrigger={() => (
            <span className="text-base hover:cursor-pointer active:translate-y-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  transition duration-500">
              {lang === "en" ? "Language" : "言語"}{" "}
              <HiChevronDown className="inline" />
            </span>
          )}
        >
          <Dropdown.Item onClick={lang === "en" ? onHoldLang : onChangeLang}>
            English
          </Dropdown.Item>
          <Dropdown.Item onClick={lang === "en" ? onChangeLang : onHoldLang}>
            Japanese
          </Dropdown.Item>
        </Dropdown>
      </div>
      <ListCounter
        todoList={todoList}
        currentDate={currentDate}
        lang={lang}
        day={day}
        month={month}
        year={year}
      />
      <div>
        {todoList.length != 0 ? (
          <h3 className="sm:text-sm text-xs pt-2 pb-1 text-slate-300 opacity-75 ps-2 ">
            {lang === "en" ? (
              currentDate
            ) : (
              <span className="tracking-wider">
                {year}年{month}月{day}日
              </span>
            )}
          </h3>
        ) : (
          " "
        )}
      </div>
    </section>
  );
}
function ListCounter({ todoList, currentDate, lang }) {
  const totalList = todoList.length;
  const checkedList = todoList.filter((todo) => todo.checked).length;
  const percentage = Math.round((checkedList / totalList) * 100);
  let offset = 251.2 - (251.2 * percentage) / 100;
  if (todoList.length !== 0) {
    return (
      <div className="flex items-center justify-between px-4">
        <h1 className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {lang === "en" ? `Todo : ${totalList}` : `やる事 : ${totalList}`}
        </h1>
        <div className="opacity-90 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex items-center">
          <div className="relative w-10 h-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-blue-500  progress-ring__circle stroke-current"
                stroke-width="10"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke-dasharray="251.2"
                stroke-dashoffset={offset}
              ></circle>

              <text
                x="50"
                y="52"
                font-family="Verdana"
                font-size="22"
                text-anchor="middle"
                alignment-baseline="middle"
                fill="white"
              >
                {percentage}%
              </text>
            </svg>
          </div>
          <h2 className="ps-1">{lang === "en" ? "Done" : "完成"}</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-between items-center px-4">
      <div>
        <h3 className="text-sm text-slate-300 opacity-75  ">{currentDate}</h3>
      </div>
      <h2 className=" text-white font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {lang === "en" ? "Todo not avaible yet" : "まだ活動はいませんいません"}
      </h2>
    </div>
  );
}
