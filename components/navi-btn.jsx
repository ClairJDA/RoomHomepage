import React from "react";
import Image from "next/image";

function NaviBtn({index, setIndex}) {
  return (
    <div className="flex items-start">
      <div
        className=" p-3 flex justify-center bg-black hover:bg-very-dark-gray"
        onClick={() => {
          index === 0 ? setIndex(2) : setIndex(index - 1);
        }}
      >
        <Image
          src="/images/icon-angle-left.svg"
          alt="arrow"
          width={30}
          height={30}
        />
      </div>
      <div
        className=" p-3 object-contain flex justify-center bg-black hover:bg-very-dark-gray"
        onClick={() => {
          index === 2 ? setIndex(0) : setIndex(index + 1);
        }}
      >
        <Image
          src="/images/icon-angle-right.svg"
          alt="arrow"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default NaviBtn;
