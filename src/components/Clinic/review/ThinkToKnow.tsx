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
		</div>
	)
}
export default ThinkToKnow
