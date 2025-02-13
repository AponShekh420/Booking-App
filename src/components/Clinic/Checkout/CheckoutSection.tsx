'use client'
import { CardPayIcon } from '@/components/common/Icons'
import Wrapper from '@/components/common/Wrapper'
import Image from 'next/image'
import { useState } from 'react'
import CheckOutBox from '../CheckoutBox'
import ClinicHeadingText from '../ClinicHeadingText'
import Input from './Input'
import Textarea from './TextArea'

export default function CheckoutSection() {
	const [paymentToggle, setpaymentToggle] = useState(false)
	return (
		<Wrapper className="min-h-screen md:my-[40px] lg:my-[79px]">
			<div className="flex flex-col-reverse justify-between gap-x-8 md:flex-row">
				<div className="w-full md:w-7/12">
					<ClinicHeadingText title="Review and confirm" />

					{/* mobile checkout box start section */}
					<div className="mt-4 md:hidden">
						<div className="flex gap-x-5">
							<Image
								src="/assets/clinic/clinic-1.png"
								alt="clinic"
								width={80}
								className="h-[79.96px] object-cover"
								height={100}
							/>
							<div>
								<h5 className="text-[23px] font-bold xs:text-[27.47px]">
									Hanley Laser Clinic
								</h5>
								<p className="mt-1 text-[17.64px] xs:text-[18.64px]">
									114 New Cavendish St, London{' '}
								</p>
							</div>
						</div>
						<div className="mt-8 flex items-end justify-between text-[21px] xs:text-[24px]">
							<div>
								<p className="font-semibold">PRP Hair Loss Treatment</p>
								<span className="mt-1.5 block font-normal">
									1hr - With Olga
								</span>
							</div>
							<h5 className="font-bold">£200</h5>
						</div>
						<hr className="my-4" />
						<div className="flex justify-between text-[30px] font-bold xs:text-[40px]">
							<h5>Total</h5>
							<h5>£200</h5>
						</div>
					</div>
					{/* mobile checkout box end section */}

					<div className="flex items-center justify-between">
						<h3 className="mb-[12px] mt-[20px] text-[25.11px] font-semibold leading-[74.7px] sm:text-[36px] md:text-[32px] xl:text-[36px]">
							Payment method
						</h3>
						<button
							onClick={() => setpaymentToggle(true)}
							className="flex h-[41.21px] items-center justify-center rounded-[68.01px] bg-black px-8 text-[16.79px] text-white transition-colors duration-300 hover:bg-custom-red md:hidden"
						>
							Edit
						</button>
					</div>

					<form action="#" className="space-y-[30px]">
						<div
							className={`${!paymentToggle ? 'hidden md:block' : 'block'} space-y-[30px]`}
						>
							<Input name="card-name" label="Name on Card" />
							<Input name="card-number" label="Card Number" />
							<div className="grid grid-cols-2 gap-[34px]">
								<Input name="expiry-date" label="Expiry Date" />
								<Input name="security-code" label="Security Code" />
							</div>
							<div className="hidden items-center gap-8 text-[24px] font-semibold leading-[49.8px] sm:flex md:text-[22px]">
								<button type="button">Pay Securely with</button>
								<button type="button">
									<CardPayIcon className="w-[120px]" />
								</button>
							</div>
							<div className="flex justify-between md:hidden">
								<button
									onClick={() => setpaymentToggle(false)}
									className="flex h-[41.21px] items-center justify-center rounded-[68.01px] border border-black px-8 text-[16.79px] text-black transition-colors duration-300 hover:bg-black hover:text-white"
								>
									Cancel
								</button>
								<button className="flex h-[41.21px] items-center justify-center rounded-[68.01px] bg-black px-8 text-[16.79px] text-white transition-colors duration-300 hover:bg-custom-red">
									Confirm
								</button>
							</div>
						</div>
						<div
							className={`${paymentToggle ? 'hidden md:block' : 'block'} space-y-[30px]`}
						>
							<div className="grid lg:grid-cols-2">
								<Input name="add-discount" label="Add Discount Code" />
							</div>
							<Textarea
								placeholder="Include comments or request regarding your booking"
								name="booking-note"
								label="Booking Notes"
								className="placeholder:text-black"
							/>
							<div className="md:hidden">
								<div>
									<h5 className="text-[24px] font-semibold">
										Terms & Conditions
									</h5>
									<p className="mt-3 text-[16px] leading-[25px]">
										Deposits are non-refundable, you can reschedule your
										appointment and your deposit will be transferred over to
										your future booking. If you are unable to reschedule, please
										contact us at least 48 hours before your appointment. No
										shows and cancellations with less that 24 hours notice will
										be charged the cost of the scheduled service. Rebooking
										after a no show is at the salons discretion and may require
										an upfront payment of the cost of the service to secure a
										booking.
									</p>
								</div>
								<div>
									<hr />
									<div className="flex items-center justify-between">
										<div className="mt-4 text-[15.56px] font-semibold sm:text-[19px]">
											<h5 className="leading-[20.1px]">£200 </h5>
											<p>PRP Hair Loss Treatment</p>
											<span>1hr</span>
										</div>
										<button className="flex h-[41.21px] items-center justify-center rounded-[68.01px] bg-custom-red px-8 text-[16.79px] text-white transition-colors duration-300 hover:bg-black">
											Confirm
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="mb-7 w-full md:mb-0 md:w-5/12">
					<CheckOutBox path={'/clinic/checkouts'} className="hidden md:block" />
				</div>
			</div>
		</Wrapper>
	)
}
