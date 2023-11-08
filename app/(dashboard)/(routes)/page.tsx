import { UserButton } from "@clerk/nextjs";

const RouteA = () => {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default RouteA;
