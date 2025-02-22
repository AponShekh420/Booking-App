'use client'

import React, { useState } from 'react'
import { GuestsObject } from '../type'
import LocationInput from './LocationInputMobile'
import DatesRangeInput from './DatesRangeInputMobile'
import T from '@/utils/getT'
import CategoryInput from './CategoryInputMobile'
import convertSingleDateToString from '@/utils/convertSingleDateToString'

const StaySearchForm = () => {
	//
	const [fieldNameShow, setFieldNameShow] = useState<
		'location' | 'dates' | 'Search'
	>('Search')
	//
	const [locationInputTo, setLocationInputTo] = useState('');
	const [searchInputTo, setSearchInputTo] = useState('');
	const [guestInput, setGuestInput] = useState<GuestsObject>({
		guestAdults: 0,
		guestChildren: 0,
		guestInfants: 0,
	})
	const [startDate, setStartDate] = useState<Date | null>(
		new Date('2023/02/06'),
	)
	const [endDate, setEndDate] = useState<Date | null>(new Date('2023/02/23'))
	//

	const onChangeDate = (dates: [Date | null, Date | null]) => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
	}

	const renderInputLocation = () => {
		const isActive = fieldNameShow === 'location'
		return (
			<div className="w-full rounded-xl bg-white shadow-sm dark:bg-neutral-800">
				{!isActive ? (
					<button
						className={`flex w-full justify-between p-4 text-sm font-medium`}
						onClick={() => setFieldNameShow('location')}
					>
						<span className="text-neutral-400">
							{T['HeroSearchForm']['Where']}
						</span>
						<span>{locationInputTo || T['HeroSearchForm']['Location']}</span>
					</button>
				) : (
					<LocationInput
						defaultValue={locationInputTo}
						onChange={(value) => {
							setLocationInputTo(value)
							setFieldNameShow('dates')
						}}
					/>
				)}
			</div>
		)
	}




	const renderInputGuests = () => {
		const isActive = fieldNameShow === 'Search'
		return (
			<div className="w-full rounded-xl bg-white shadow-sm dark:bg-neutral-800">
				{!isActive ? (
					<button
						className={`flex w-full justify-between p-4 text-sm font-medium`}
						onClick={() => setFieldNameShow('Search')}
					>
						<span className="text-neutral-400">
							Search
						</span>
						<span>{searchInputTo || 'Categories'}</span>
					</button>
				) : (
					<CategoryInput
						defaultValue={searchInputTo}
						onChange={(value) => {
							setSearchInputTo(value)
							setFieldNameShow('Search')
						}}
					/>
				)}
			</div>
		)
	}

	const renderInputDates = () => {
		const isActive = fieldNameShow === 'dates'

		return (
			<div className="w-full rounded-xl bg-white shadow-sm dark:bg-neutral-800">
				{!isActive ? (
					<button
						className={`flex w-full justify-between p-4 text-sm font-medium`}
						onClick={() => setFieldNameShow('dates')}
					>
						<span className="text-neutral-400">
							{"Date"}
						</span>
						<span>
							{startDate
								? convertSingleDateToString([startDate])
								: T['HeroSearchForm']['Add dates']}
						</span>
					</button>
				) : (
					<DatesRangeInput />
				)}
			</div>
		)
	}

	// const renderInputGuests = () => {
	// 	const isActive = fieldNameShow === 'guests'
	// 	let guestSelected = ''
	// 	if (guestInput.guestAdults || guestInput.guestChildren) {
	// 		const guest =
	// 			(guestInput.guestAdults || 0) + (guestInput.guestChildren || 0)
	// 		guestSelected += `${guest} guests`
	// 	}

	// 	if (guestInput.guestInfants) {
	// 		guestSelected += `, ${guestInput.guestInfants} infants`
	// 	}

	// 	return (
	// 		<div className="w-full rounded-xl bg-white shadow-sm dark:bg-neutral-800">
	// 			{!isActive ? (
	// 				<button
	// 					className={`flex w-full justify-between p-4 text-sm font-medium`}
	// 					onClick={() => setFieldNameShow('guests')}
	// 				>
	// 					<span className="text-neutral-400">
	// 						{T['HeroSearchForm']['Who']}
	// 					</span>
	// 					<span>{guestSelected || T['HeroSearchForm']['Add guests']}</span>
	// 				</button>
	// 			) : (
	// 				<GuestsInput defaultValue={guestInput} onChange={setGuestInput} />
	// 			)}
	// 		</div>
	// 	)
	// }

	return (
		<div>
			<div className="w-full space-y-3 max-h-full">
				{/*  */}
				{renderInputGuests()}
				{/*  */}
				{renderInputLocation()}
				{/*  */}
				{renderInputDates()}
			</div>
		</div>
	)
}

export default StaySearchForm
