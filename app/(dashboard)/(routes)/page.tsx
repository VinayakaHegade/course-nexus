import { UserButton } from "@clerk/nextjs";

const RouteA = () => {
  return (
    <>
      <p>This is protected route</p>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default RouteA;
