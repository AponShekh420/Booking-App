"use client"

import { DownArrowIcon } from "@/components/common/Icons";
import { useState } from "react";

const Faq = ({title, desc}: {title: string, desc: string}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="mb-5">
      <p className="text-[26px] font-bold cursor-pointer hover:text-custom-red duration-300" onClick={() => setToggle(pre => !pre)}>{title}</p>
      <div className={`flex gap-x-4 items-center mt-5 overflow-hidden transition-[max-height] duration-300 delay-0 ease-in-out ${toggle ? "max-h-[9999px]" : "max-h-[0px]"}`}>
        <p className="text-[26px] text-custom-red">{desc}</p>
        <DownArrowIcon/>
      </div>
    </div>
  );
}

export default Faq;