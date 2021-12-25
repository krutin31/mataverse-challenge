import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  <h2>Head</h2>;

  return (
    <div className="text-pink-500 sticky top-0 p-5 shadow-sm bg-black border-b-2 border-pink-700 z-50">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid ">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://links.papareact.com/3pi"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className=" relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress/>
          </div>
          <h1 className="text-3xl ">Welcome to Decentralized chat app</h1>
          <h2>{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
