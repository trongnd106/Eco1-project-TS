import { Link, NavLink } from "react-router-dom";
import { FaParachuteBox } from "react-icons/fa";
import logo from "../assets/logo.png";
export const SidebarAdmin = () => {
  return (
    <aside className="max-w-[260px] ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-white">
      <div className="h-19.5">
        <Link
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
          to="/"
          target="_blank"
        >
          <img
            src={logo}
            className="inline h-full transition-all duration-200 ease-nav-brand"
            alt="main_logo"
          />
        </Link>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mt-3">
          <li className="w-full">
            <NavLink
              className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
              to="/admin"
            >
              <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center">
                <FaParachuteBox />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                List Products
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
