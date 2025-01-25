import { PaymentHistoryIcon } from '@/components/common/Icons'

export default function HistoryList() {
	return (
		<div className="2md:grid-cols-[70px_1fr_100px] grid grid-cols-[70px_1fr_100px] items-center sm:grid-cols-[50px_1fr_80px]">
			<PaymentHistoryIcon className="2md:w-[57px] h-auto w-[45px]" />
			<div className="2md:ml-[40px] ml-[10px]">
				<h5 className="2md:text-[20px] text-[15px] font-bold leading-[28px]">
					10:31 am 23/12/24
				</h5>
				<p className="2md:text-[23.2px] mt-2 text-[18px]">
					Booked online - Dermamina
				</p>
			</div>
			<button className="2md:text-[16px] self-end font-bold">
				See receipt
			</button>
		</div>
	)
}
