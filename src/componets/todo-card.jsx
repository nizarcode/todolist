import { BsTrash, BsPencilSquare, BsClock } from "react-icons/bs";

export default function TodoCard({ todo, onChecked, onDelete, onEdit }) {
  return (
    <>
      <li className=" bg-white my-2 px-1 py-[6px] rounded-md shadow-sm hover:shadow hover:bg-sky-100 hover:scale-[103%] ease-in-out transition w-[90%]  mx-auto duration-500 group">
        <div className=" flex justify-between text-sky-700">
          <div className="flex truncate self-center p-2 items-center">
            <input
              type="checkbox"
              onChange={() => onChecked(todo.id)}
              checked={todo.checked}
              className="mr-3 outline-none appearance-none border-blue-200 rounded-full p-0"
            />
            <span
              className="text-base font-medium truncate group-hover:font-bold"
              style={todo.checked ? { textDecoration: "line-through" } : {}}
            >
              {todo.todoName}
            </span>
          </div>
          <div className="pt-2">
            {todo.checked == false ? (
              <a
                onClick={() => onEdit(todo.id, todo.todoName, todo.time)}
                className="cursor-pointer  p-2 relative top-[10px]  transition duration-300"
              >
                <BsPencilSquare className="group-hover:text-lime-500 inline active:scale-90 hover:scale-125 transition duration-500" />
              </a>
            ) : (
              ""
            )}

            <a
              onClick={() => onDelete(todo.id)}
              className="cursor-pointer  p-2 relative top-[10px]  transition duration-300"
            >
              <BsTrash className="group-hover:text-red-500 inline active:scale-90 hover:scale-125 transition duration-500 " />
            </a>
          </div>
        </div>
        <div className="flex items-center ml-2 pt-1">
          <BsClock className="inline opacity-80 text-xs mr-1 text-slate-600" />
          <p className="text-xs font-thin pt-[1px] opacity-50 group-hover:font-bold group-hover:text-slate-800">
            {todo.time}
          </p>
        </div>
      </li>
    </>
  );
}
