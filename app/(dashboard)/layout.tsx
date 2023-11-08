import SideBar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <section className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar />
      </section>
      {children}
    </div>
  );
};

export default DashboardLayout;
