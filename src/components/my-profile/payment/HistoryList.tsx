import { PaymentHistoryIcon } from '@/components/common/Icons'

export default function HistoryList() {
	return (
		<div className="grid grid-cols-[30px_1fr_100px] items-center sm:grid-cols-[35px_1fr_80px] 2md:grid-cols-[15px_1fr_100px]">
			<PaymentHistoryIcon className="h-auto w-[30px] 2md:w-[35px]" />
			<div className="ml-[10px] 2md:ml-[40px]">
				<h5 className="font-bold leading-[28px] sm:text-lg">
					10:31 am 23/12/24
				</h5>
				<p className="mt-1 sm:text-md">
					Booked online - Hanley Laser Clinic
				</p>
			</div>
			<button className="self-end font-bold 2md:text-[16px]">
				See receipt
			</button>
		</div>
	)
}
