// "use client";
// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import React, { useEffect } from "react";

// const Header = () => {
//   const path = usePathname();
//   useEffect(() => {
//     console.log(path);
//   }, []);
//   return (
//     <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
//       <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
//       <ul className=" hidden md:flex gap-9 p-2">
//         <li
//           className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
//             path == "/dashboard" && " text-primary font-bold"
//           }`}
//         >
//           Dashboard
//         </li>
//         <li  className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
//             path == "/dashboard/Questions" && " text-primary font-bold"
//           }`}>
//           Questions
//         </li>
//         <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
//             path == "/dashboard/Upgrade" && " text-primary font-bold"
//           }`}>
//           Upgrade
//         </li>
//         <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
//             path == "/dashboard/How it Works?" && " text-primary font-bold"
//           }`}>
//           How it Works?
//         </li>
//       </ul>
//       <UserButton />
//     </div>
//   );
// };

// export default Header;





"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className="hidden md:flex gap-9 p-2">
        <li>
          <Link
            href="/dashboard"
            className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
              path === "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/Questions"
            className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
              path === "/dashboard/Questions" && "text-primary font-bold"
            }`}
          >
            Questions
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/upgrade"
            className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
              path === "/dashboard/Upgrade" && "text-primary font-bold"
            }`}
          >
            Upgrade
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/How%20it%20Works%3F"
            className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${
              path === "/dashboard/How it Works?" && "text-primary font-bold"
            }`}
          >
            How it Works?
          </Link>
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
