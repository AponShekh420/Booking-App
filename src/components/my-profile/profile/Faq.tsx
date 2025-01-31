"use client"

import { DownArrowIcon } from "@/components/common/Icons";
import { useState } from "react";

const Faq = ({title, desc}: {title: string, desc: string}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="lg:mb-5 mb-2 sm:mb-3 lg:text-[26px] text-md sm:text-lg md:text-xl">
      <p className="font-bold cursor-pointer hover:text-custom-red duration-300" onClick={() => setToggle(pre => !pre)}>{title}</p>
      <div className={`flex gap-x-4 items-center lg:mt-5 mt-2 sm:mt-3 overflow-hidden transition-[max-height] duration-300 delay-0 ease-in-out ${toggle ? "max-h-[9999px]" : "max-h-[0px]"}`}>
        <p className="text-custom-red">{desc}</p>
        <DownArrowIcon/>
      </div>
    </div>
  );
}

export default Faq;