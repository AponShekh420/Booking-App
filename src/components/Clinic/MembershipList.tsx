const MembershipList = () => {
  return (
    <div className="w-full">
      <div className="mt-3 w-full items-center justify-between rounded-[10px] border border-[#9B9B9B] p-4 flex">
        <div>
          <p className="text-lg xs:text-xl font-bold md:text-[18px] lg:text-xl">
            Gift Vouchers
          </p>
          <p className="text-sm xs:text-base md:text-[14px] lg:text-[16px]">
            Treat yourself or a friend
          </p>
        </div>
        <button className="rounded-[80.12px] px-4 py-1 text-[13.07px] md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px] capitalize bg-black font-semibold text-white transition-all duration-300 hover:bg-custom-red">
          Book
        </button>
      </div>
      <div className="mt-3 w-full items-center justify-between rounded-[10px] border border-[#9B9B9B] p-4 flex">
        <div>
          <p className="text-lg xs:text-xl font-bold md:text-[18px] lg:text-xl">
            Memberships
          </p>
          <p className="text-sm xs:text-base md:text-[14px] lg:text-[16px]">
            Treat yourself or a friend
          </p>
        </div>
        <button className="rounded-[80.12px] px-4 py-1 text-[13.07px] md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px] capitalize bg-black font-semibold text-white transition-all duration-300 hover:bg-custom-red">
          Book
        </button>
      </div>
    </div>
  );
}

export default MembershipList;