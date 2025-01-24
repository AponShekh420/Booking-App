import { PaymentHistoryIcon } from '@/components/common/Icons'

export default function HistoryList() {
	return (
		<div className="grid grid-cols-[70px_1fr_100px] items-center">
			<PaymentHistoryIcon className="h-auto w-[57px]" />
			<div className="ml-[40px]">
				<h5 className="text-[20px] font-bold leading-[28px]">
					10:31 am 23/12/24
				</h5>
				<p className="mt-2 text-[23.2px]">Booked online - Dermamina</p>
			</div>
			<button className="self-end text-[16px] font-bold">See receipt</button>
		</div>
	)
}
