import Image from "next/image";
import React from "react";

function SideBar({setIsOpen}) {
  return (
    <div className="p-4 py-6 lg:hidden absolute w-full flex justify-between items-center bg-white z-20">
      <Image
        src={"/images/icon-close.svg"}
        alt="close icon"
        width={20}
        height={20}
        onClick={()=>setIsOpen(false)}
      />
      <ul className="flex gap-x-4 text-sm text-black font-bold">
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default SideBar;
