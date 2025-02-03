'use client'
import { AnswerIcon } from '@/components/common/Icons'
import {
	PaymentSchema,
	PaymentType,
} from '@/zod-schema/my-profile/profile-payment'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ProfileHeading from '../ProfileHeading'
import RedButton from '../RedButton'
import TextInput from '../TextInput'
import HistoryList from './HistoryList'
export default function PaymentSection() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<PaymentType>({
		resolver: zodResolver(PaymentSchema),
	})
	const onSubmit = (data: PaymentType) => console.log(data)

	return (
		<div>
			<div className="mt-[54px]">
				<ProfileHeading title="Payments" tag="h1" />
				<div className="sm:ml-4">
					<div className="my-6">
						<h5 className="mb-2 text-[20.39px] font-semibold">
							Payment method
						</h5>
						<p>
							Add card to your Gentlemend Account and get to know Mobile
							Payments - fast, convenient and secure.
						</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-[30px]">
						<div className="grid gap-x-[44px] gap-y-[30px] 2md:grid-cols-2">
							<TextInput
								{...register('cardHolder')}
								label="Cardholder Name"
								error={errors.cardHolder}
							/>
							<TextInput
								{...register('cardNumber')}
								label="Card Number"
								error={errors.cardNumber}
							/>
							<TextInput
								{...register('cardExpiry')}
								label="Expires (MM/YYYY)"
							/>
							<TextInput
								{...register('cvv')}
								label="CVV/CVC"
								error={errors.cvv}
							/>
						</div>
						<div className="grid gap-x-[44px] gap-y-[30px] lg:grid-cols-2">
							<TextInput
								label="Postcode"
								{...register('postCode')}
								error={errors.postCode}
							/>
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
						</div>
						<RedButton
							title="Add Card"
							className="lg2:!mt-[-15px] relative mx-auto !mt-5 block sm:w-fit 2md:mx-0 lg:!mt-[-40px] xl:!mt-0"
						/>
					</form>
				</div>
			</div>
			<div className="mt-[54px]">
				<ProfileHeading title="Payment History" />
				<ul className="mt-[30px] space-y-[30px] sm:ml-4">
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
