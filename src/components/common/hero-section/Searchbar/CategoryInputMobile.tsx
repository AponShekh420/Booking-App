'use client'

import { Search01Icon } from '@/components/Icons'
import T from '@/utils/getT'
import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useState, useEffect, useRef, FC } from 'react'
import categoriesList from "@/data/categorieslist";

interface Props {
	onClick?: () => void
	onChange?: (value: string) => void
	className?: string
	defaultValue?: string
	headingText?: string
}

const CategoryInput: FC<Props> = ({
	onChange = () => {},
	className = '',
	defaultValue = 'United States',
	headingText = 'Search',
}) => {
	const [value, setValue] = useState('')
	const containerRef = useRef(null)
	const inputRef = useRef(null)

	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	const handleSelectLocation = (item: string) => {
		// DO NOT REMOVE SETTIMEOUT FUNC
		setTimeout(() => {
			setValue(item)
			onChange && onChange(item)
		}, 0)
	}

	const renderSearchValues = ({
		heading,
		items,
	}: {
		heading: string
		items: any
	}) => {
		return (
			<>
				<p className="block text-base font-semibold">
					{heading || 'Categories'}
				</p>
				<div className="mt-3">
					{items?.map((category: any, index: number) => {
						return (
							<div
								className="mb-1 flex items-center gap-x-3 py-2 text-sm"
								onClick={() => handleSelectLocation(category?.text)}
								key={index}
							>
								{/* <MapPinIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" /> */}
								<div className="h-5 w-5">
									<Image
										src={category?.icon}
										alt={category?.text}
										width={100}
										height={100}
										className="w-full h-full"
									/>
								</div>
								<span>{category?.text}</span>
							</div>
						)
					})}
				</div>
			</>
		)
	}

	return (
		<div className={`${className}`} ref={containerRef}>
			<div className="p-5">
				<span className="block text-xl font-semibold sm:text-2xl">
					{headingText}
				</span>
				<div className="relative mt-5">
					<input
						className="block w-full truncate rounded-xl border border-neutral-800 bg-transparent px-4 py-3 pe-12 text-base font-medium leading-none placeholder-neutral-500 placeholder:truncate focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:placeholder-neutral-300 dark:focus:ring-primary-600 dark:focus:ring-opacity-25"
						placeholder={'Search treatments'}
						value={value}
						onChange={(e) => setValue(e.currentTarget.value)}
						ref={inputRef}
					/>
					<span className="absolute end-2.5 top-1/2 -translate-y-1/2">
						<Search01Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-400" />
					</span>
				</div>
				<div className="mt-7">
					{value
						? renderSearchValues({
								heading: 'Relevant treatments',
								items: categoriesList?.slice(0, 6).map((item, index)=> {
									return {
										text: item?.text,
										icon: item?.icon
									}
								})
							})
						: renderSearchValues({
								heading: 'Popular treatments',
								items: categoriesList?.slice(6, 12).map((item, index)=> {
									return {
										text: item?.text,
										icon: item?.icon
									}
								})
							})}
				</div>
			</div>
		</div>
	)
}

export default CategoryInput
