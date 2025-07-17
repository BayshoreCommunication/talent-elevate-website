import { auth } from "@/auth";
import NavbarDetails from "./NavbarDetails";

const Navbar = async () => {
  const session = await auth();

  console.log("check value item session", session?.user?.accessToken);

  return (
    <div>
      <NavbarDetails user={session?.user || ""} />
    </div>
  );
};

export default Navbar;
