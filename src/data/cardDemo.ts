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
		href: '/category/search',
		name: 'Nature House',
		taxonomy: 'category',
		count: 17288,
		thumbnail: '/assets/home/category-1.png',
	},
	{
		id: '2',
		href: '/category/search',
		name: 'Wooden house',
		taxonomy: 'category',
		count: 2118,
		thumbnail: '/assets/home/category-2.png',
	},
	{
		id: '3',
		href: '/category/search',
		name: 'Houseboat',
		taxonomy: 'category',
		count: 36612,
		thumbnail: '/assets/home/category-3.png',
	},
	{
		id: '4',
		href: '/category/search',
		name: 'Farm House',
		taxonomy: 'category',
		count: 18188,
		thumbnail: '/assets/home/category-4.png',
	},
	{
		id: '5',
		href: '/category/search',
		name: 'Dome House',
		taxonomy: 'category',
		count: 22288,
		thumbnail:
			'https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	},
	{
		id: '6',
		href: '/category/search',
		name: 'Dome House',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/14534337/pexels-photo-14534337.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
	},
	{
		id: '7',
		href: '/category/search',
		name: 'Wooden house',
		taxonomy: 'category',
		count: 2118,
		thumbnail:
			'https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '8',
		href: '/category/search',
		name: 'Wooden Dome',
		taxonomy: 'category',
		count: 515,
		thumbnail:
			'https://images.pexels.com/photos/9039238/pexels-photo-9039238.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
	},
]

export default DEMO_CATS
