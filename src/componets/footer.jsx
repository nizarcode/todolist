import {
  BsGithub,
  BsInstagram,
  BsEnvelopeFill,
  BsTwitterX,
  BsMedium,
} from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white font-medium w-full py-4 px-4 text-sm text-center ">
      <p className="text-base tracking-wider mb-1">&copy; Nizar 2024</p>
      <ul className="flex justify-center">
        <li>
          <a
            href="mailto:ahmadnizar238@gmail.com"
            className="p-2 rounded-full mx-2 flex hover:bg-blue-400 transition active:bg-blue-600 active:translate-y-1 duration-500"
          >
            <BsEnvelopeFill className="text-lg" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ni_za_ru/"
            className="p-2 rounded-full mx-2 flex hover:bg-blue-400 transition active:bg-blue-600 active:translate-y-1 duration-500"
          >
            <BsInstagram className="text-lg" />
          </a>
        </li>
        <li>
          <a
            href="https://www.x.com/ni_za_ru/"
            className="p-2 rounded-full mx-2 flex hover:bg-blue-400 transition active:bg-blue-600 active:translate-y-1 duration-500"
          >
            <BsTwitterX className="text-lg" />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@nizaru"
            className="p-2 rounded-full mx-2 flex hover:bg-blue-400 transition active:bg-blue-600 active:translate-y-1 duration-500"
          >
            <BsMedium className="text-lg" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nizarcode"
            className="p-2 rounded-full mx-2 flex hover:bg-blue-400 transition active:bg-blue-600 active:translate-y-1 duration-500"
          >
            <BsGithub className="text-lg" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
