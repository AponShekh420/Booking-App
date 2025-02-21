'use client'

import React, { useState, FC } from 'react'
import DatePicker from 'react-datepicker'
import DatePickerCustomHeaderTwoMonth from '@/components/DatePickerCustomHeaderTwoMonth'
import DatePickerCustomDay from '@/components/DatePickerCustomDay'

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

	const renderButtonList = () => (
		Array.from({ length: 6 }).map((_, index) => (
			<button
				key={index}
				className="md:w-[150px] 2xl:w-[200px] sm:w-[48%] w-full h-[35px] flex items-center justify-center rounded-[44px] bg-[#F3F3F3] hover:bg-[#E9082A] text-[15px] leading-[33.63px] font-[700] text-black hover:text-white"
			>
				1{index + 1}: 00 AM
			</button>
		))
  )

  return (
		<div className='w-full p-6 md:p-0'>
			<div className='w-full h-auto flex md:gap-x-[30px] lg:gap-x-[40px] justify-between flex-col md:flex-row'>
				<div className="w-full">
					<DatePicker
						selected={startDate}
						onChange={onChangeDate}
						// startDate={startDate}
						// endDate={endDate}
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
				<div className="w-full md:w-auto">
					<p className='text-[20.52px] font-bold leading-[33.63px] text-center mb-[2px] lg:mb-6 mt-5 xs:mt-8 md:mt-5 lg:mt-0'>Time</p>
					<div className='datePickerScrollbar flex flex-col md:pr-3 gap-y-[8px] lg:gap-x-[0px] md:gap-x-[2%] gap-x-[8px] md:flex-nowrap flex-wrap justify-center md:justify-start md:max-h-[200px] md:overflow-x-auto'>
						{renderButtonList()}
					</div>
				</div>
			</div>
		</div>
  )
}

export default StayDatesRangeInput
