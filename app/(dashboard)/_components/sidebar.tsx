import Logo from "./logo";
import SideBarRoutes from "./sidebar-routes";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex items-center gap-3 text-black font-[700]">
        <Logo />
        <p>Course Nexus</p>
      </div>
      <div className="flex flex-col w-full">
        <SideBarRoutes />
      </div>
    </div>
  );
};

export default SideBar;
