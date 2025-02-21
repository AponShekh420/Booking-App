"use client"
import { signinActive } from "@/redux-toolkit/features/clinic/authPopupSlice";
import { useAppDispatch } from "@/redux-toolkit/hooks";
import Link from "next/link";

const CartMobile = ({path}: {path: any}) => {
  const dispatch = useAppDispatch()
  return (
    <div className="mt-7 block md:hidden">
      <hr />
      <div className="flex items-center justify-between">
        <div className="mt-4 text-[15.56px] font-semibold sm:text-[19px]">
          <h5 className="leading-[20.1px]">£200 </h5>
          <p>PRP Hair Loss Treatment</p>
          <span>1hr</span>
        </div>

        {path === '/clinic/checkout' ? (
          <button 
          onClick={() => dispatch(signinActive())}
          className="flex h-[41.21px] items-center justify-center rounded-[68.01px] bg-custom-red px-8 text-[16.79px] text-white transition-colors duration-300 hover:bg-black">
            Continue
          </button>
        ) : (
          <Link href={path} className="flex h-[41.21px] items-center justify-center rounded-[68.01px] bg-custom-red px-8 text-[16.79px] text-white transition-colors duration-300 hover:bg-black">
            Continue
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartMobile;