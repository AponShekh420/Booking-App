import { PaymentHistoryIcon } from '@/components/common/Icons'

export default function HistoryList() {
	return (
		<div className="grid grid-cols-[45px_1fr_100px] items-center sm:grid-cols-[50px_1fr_80px] 2md:grid-cols-[35px_1fr_100px]">
			<PaymentHistoryIcon className="h-auto w-[40px] 2md:w-[45px]" />
			<div className="ml-[10px] 2md:ml-[40px]">
				<h5 className="text-[15px] font-bold leading-[28px] 2md:text-[20px]">
					10:31 am 23/12/24
				</h5>
				<p className="mt-1 text-[18px] 2md:text-[22.2px]">
					Booked online - Dermamina
				</p>
			</div>
			<button className="self-end font-bold 2md:text-[16px]">
				See receipt
			</button>
		</div>
	)
}
