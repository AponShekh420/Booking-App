import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

const DatePickerCustomHeaderTwoMonth = ({
  monthDate,
  decreaseMonth,
  increaseMonth,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        aria-label="Previous Month"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={decreaseMonth}
        type="button"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <span className="text-lg font-medium">
        {monthDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
      </span>
      <button
        aria-label="Next Month"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={increaseMonth}
        type="button"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}

export default DatePickerCustomHeaderTwoMonth
