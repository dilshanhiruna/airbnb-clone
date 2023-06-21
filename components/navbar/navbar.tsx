import Container from "../container/container";
import Logo from "../navbar/logo";
import Search from "./search";
import Usermenu from "./usermenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row item-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row items-center gap-3">
              <Logo />
            </div>
            <Search />
            <Usermenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
