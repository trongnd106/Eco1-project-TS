import { Outlet } from "react-router-dom";
import { SidebarAdmin } from "../components/SidebarAdmin";
import { ToastContainer } from "react-toastify";

const Admin = () => {
  return (
    <>
      <div className="m-0 font-sans min-h-screen absolute w-full text-base antialiased font-normal leading-default bg-gray-200 text-slate-500">
        <SidebarAdmin />
        <div className="ease-soft-in-out float-right w-3/4 xl:ml-68.5 relative h-full rounded-xl transition-all duration-200 mt-4 mr-5">
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="py-5 rounded-lg px-3 bg-white border-l-4 border-r-4 border-[#ECAF82] flex items-center mb-5">
              <div>
                <h2 className="text-lg font-bold">Admin.Prodcuts</h2>
              </div>
            </div>
            <div className="p-0 overflow-x-auto">
              <Outlet />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
export default Admin;
