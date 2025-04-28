"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className=" hidden md:flex gap-9 p-2">
        <li
          className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
            path == "/dashboard" && " text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li  className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
            path == "/dashboard/Questions" && " text-primary font-bold"
          }`}>
          Questions
        </li>
        <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
            path == "/dashboard/Upgrade" && " text-primary font-bold"
          }`}>
          Upgrade
        </li>
        <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
            path == "/dashboard/How it Works?" && " text-primary font-bold"
          }`}>
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
