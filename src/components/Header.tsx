import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center gap-4 h-16 w-full px-6 border-b-solid border-b-slate-400 border-b-[1px] shadow-md">
      <Link className="text-[24px] font-bold" to="/">
        LOGO
      </Link>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
