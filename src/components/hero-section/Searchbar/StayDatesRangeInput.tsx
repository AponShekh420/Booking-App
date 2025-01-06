'use client'

import React, { Fragment, useState, FC } from 'react'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import { CalendarIcon } from '@heroicons/react/24/outline'
import DatePicker from 'react-datepicker'
import ClearDataButton from './ClearDataButton'
import DatePickerCustomHeaderTwoMonth from '@/components/DatePickerCustomHeaderTwoMonth'
import DatePickerCustomDay from '@/components/DatePickerCustomDay'
import Image from 'next/image'

export interface StayDatesRangeInputProps {
  className?: string
  fieldClassName?: string
}

const StayDatesRangeInput: FC<StayDatesRangeInputProps> = ({
  className = 'lg:nc-flex-2 ',
  fieldClassName = 'nc-hero-field-padding',
}) => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date('2023/02/06'),
  )
  const [endDate, setEndDate] = useState<Date | null>(new Date('2023/02/23'))

  const onChangeDate = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const renderInput = () => (
    <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] border-r-[1px] flex items-center border-[#D8D8D8]">
			<Image 
				src={"assets/icons/searchbar/Vector.svg"} 
				alt="AI" 
				width={100} 
				height={100}
				className="lg:w-[30px] lg:h-[30px] h-[16.72px] w-[16.72px] sm:h-[27.72px] sm:w-[27.72px]"
			/>
		</div>
  )

	const renderButtonList = () => (
		Array.from({ length: 6 }).map((_, index) => (
			<button
				key={index}
				className="md:w-[151px] w-5/12 h-[29px] rounded-[44px] bg-[#F3F3F3] hover:bg-[#E9082A] text-[13px] leading-[33.63px] font-[700] text-black hover:text-white"
			>
				1{index + 1}: 00 AM
			</button>
		))
  )

  return (
		<div className='flex md:gap-x-[30px] lg:gap-x-[40px] justify-between w-full flex-col md:flex-row'>
			<div className="p-4 w-full">
				<DatePicker
					selected={startDate}
					onChange={onChangeDate}
					startDate={startDate}
					endDate={endDate}
					selectsRange
					monthsShown={1}
					showPopperArrow={false}
					inline
					className='w-full'
					renderCustomHeader={(p) => (
						<DatePickerCustomHeaderTwoMonth {...p} />
					)}
					renderDayContents={(day, date) => (
						<DatePickerCustomDay dayOfMonth={day} date={date} />
					)}
				/>
			</div>
			<div className="p-4 w-full md:w-auto">
				<p className='font-[700] text-[17.12px] leading-[33.63px] text-center mb-[2px]'>Time</p>
				<div className='flex md:flex-col gap-y-[8px] md:gap-x-[0px] gap-x-[8px] flex-wrap justify-center'>
					{renderButtonList()}
				</div>
			</div>
		</div>
  )
}

export default StayDatesRangeInput
