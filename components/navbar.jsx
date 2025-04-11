import Image from "next/image";

function NavBar({ setIsOpen }) {
  return (
    <div className="absolute z-10 w-full lg:w-[70%] py-6 px-4 flex justify-between">
      <Image
        src="/images/icon-hamburger.svg"
        alt="logo"
        width={30}
        height={20}
        className="lg:hidden"
        onClick={() => setIsOpen(true)}
      />
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={100}
        height={24}
        className="mx-auto lg:mx-0"
      />
      <ul className="hidden lg:flex gap-4 text-white">
        <div className="hover:cursor-pointer">
          <li>home</li>
          <hr className="w-6 mx-auto opacity-0 hover:opacity-100" />
        </div>

        <div className="hover:cursor-pointer">
          <li>shop</li>
          <hr className="w-6 mx-auto opacity-0 hover:opacity-100" />
        </div>

        <div className="hover:cursor-pointer">
          <li>about</li>
          <hr className="w-6 mx-auto opacity-0 hover:opacity-100" />
        </div>

        <div className="hover:cursor-pointer">
          <li>contact</li>
          <hr className="w-6 mx-auto opacity-0 hover:opacity-100" />
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
