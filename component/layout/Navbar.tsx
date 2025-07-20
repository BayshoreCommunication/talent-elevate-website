import { auth } from "@/auth";
import NavbarDetails from "./NavbarDetails";

const Navbar = async () => {
  const session = await auth();

  return (
    <div>
      <NavbarDetails user={session?.user || ""} />
    </div>
  );
};

export default Navbar;
