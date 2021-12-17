import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative ">
      <h3>I am login screen</h3>
      <div className="flex flex-col absolute z-50 items-center justify-center h-4/6 w-full space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          login to metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default login;
