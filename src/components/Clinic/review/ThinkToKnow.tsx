const ThinkToKnow = () => {
	return (
		<div className="mt-8 space-y-8">
			{/* HEADING */}
			<h3 className="text-2xl font-semibold">Things to know</h3>
			<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

			{/* CONTENT */}
			<div className="">
				<h4 className="text-lg font-semibold">Cancellation policy</h4>
				<span className="mt-3 block text-neutral-500 dark:text-neutral-400">
					Refund 50% of the booking value when customers cancel the room within
					48 hours after successful booking and 14 days before the check-in
					time. <br />
					Then, cancel the room 14 days before the check-in time, get a 50%
					refund of the total amount paid (minus the service fee).
				</span>
			</div>
			<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

			{/* CONTENT */}
			<div>
				<h4 className="text-lg font-semibold">Check-in time</h4>
				<div className="mt-3 max-w-md text-sm text-neutral-500 dark:text-neutral-400 sm:text-base">
					<div className="flex justify-between gap-x-10 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
						<span>Check-in</span>
						<span>08:00 am - 12:00 am</span>
					</div>
					<div className="flex justify-between gap-x-10 p-3">
						<span>Check-out</span>
						<span>02:00 pm - 04:00 pm</span>
					</div>
				</div>
			</div>
			<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

			{/* CONTENT */}
			<div>
				<h4 className="text-lg font-semibold">Special Note</h4>
				<div className="prose sm:prose">
					<ul className="mt-3 space-y-2 text-neutral-500 dark:text-neutral-400">
						<li>
							Ban and I will work together to keep the landscape and environment
							green and clean by not littering, not using stimulants and
							respecting people around.
						</li>
						<li>Do not sing karaoke past 11:30</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default ThinkToKnow
