import Logo from "./logo";
import SideBarRoutes from "./sidebar-routes";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <section className="p-6 flex items-center gap-2.5">
        <Logo />
        <h1 className="text-black font-[700] text-[18px]">Course Nexus</h1>
      </section>
      <section className="flex flex-col w-full">
        <SideBarRoutes />
      </section>
    </div>
  );
};

export default SideBar;
