interface TaxonomyType {
	id: string
	href: string
	name: string
	taxonomy: string
	count: number
	thumbnail: string
}
const DEMO_CATS: TaxonomyType[] = [
	{
		id: '1',
		href: '/category',
		name: 'Nature House',
		taxonomy: 'category',
		count: 17288,
		thumbnail: '/assets/home/category-1.png',
	},
	{
		id: '2',
		href: '/category',
		name: 'Wooden house',
		taxonomy: 'category',
		count: 2118,
		thumbnail: '/assets/home/category-2.png',
	},
	{
		id: '3',
		href: '/category',
		name: 'Houseboat',
		taxonomy: 'category',
		count: 36612,
		thumbnail: '/assets/home/category-3.png',
	},
	{
		id: '4',
		href: '/category',
		name: 'Farm House',
		taxonomy: 'category',
		count: 18188,
		thumbnail: '/assets/home/category-4.png',
	},
	{
		id: '5',
		href: '/category',
		name: 'Dome House',
		taxonomy: 'category',
		count: 22288,
		thumbnail:
			'/assets/home/category-5.png',
	},
	{
		id: '6',
		href: '/category',
		name: 'Dome House',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'/assets/home/category-6.png',
	},
	{
		id: '7',
		href: '/category',
		name: 'Wooden house',
		taxonomy: 'category',
		count: 2118,
		thumbnail:
			'/assets/home/category-7.png',
	},
	{
		id: '8',
		href: '/category',
		name: 'Wooden Dome',
		taxonomy: 'category',
		count: 515,
		thumbnail:
			'/assets/home/category-8.png',
	},
]

export default DEMO_CATS
