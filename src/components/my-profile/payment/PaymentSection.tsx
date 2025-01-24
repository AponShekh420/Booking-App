import { AnswerIcon } from '@/components/common/Icons'
import ProfileHeading from '../ProfileHeading'
import RedButton from '../RedButton'
import TextInput from '../TextInput'
import HistoryList from './HistoryList'

export default function PaymentSection() {
	return (
		<div>
			<div className="mt-[54px]">
				<ProfileHeading title="Payments" />
				<div className="ml-4">
					<div className="my-6">
						<h5>Payment method</h5>
						<p>
							Add card to your Gentlemend Account and get to know Mobile
							Payments - fast, convenient and secure.
						</p>
					</div>
					<form
						className="grid gap-x-[44px] gap-y-[41px] lg:grid-cols-2"
						action=""
					>
						<TextInput label="Cardholder Name" />
						<TextInput label="Card Number" />
						<TextInput label="Expires (MM/YYYY)" />
						<TextInput label="CVV/CVC" />
						<TextInput label="Postcode" />
						<div className="grid grid-cols-[45px_1fr]">
							<AnswerIcon className="mt-1" />
							<div>
								<h5 className="text-[15.86px] font-semibold">
									Automatic Online Payments
								</h5>
								<p className="text-[15.86px] font-light">
									Allow Automatic Payments for appointments. Just ask to use
									Mobile Payment at checkout and thats it - no in-app
									confirmation required.
								</p>
							</div>
						</div>
						<RedButton title="Add Card" className="w-fit" />
					</form>
				</div>
			</div>
			<div className="mt-[54px]">
				<ProfileHeading title="Payment History" />
				<ul className="ml-4 mt-[54px] space-y-[30px]">
					<li className="border-b pb-5">
						<HistoryList />
					</li>
					<li className="border-b pb-5">
						<HistoryList />
					</li>
				</ul>
			</div>
		</div>
	)
}
