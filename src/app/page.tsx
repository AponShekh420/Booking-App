import CategoriesSection from '@/components/home/categories-section/CategoriesSection'
import GalleryLayout from '@/components/home/gallery-layout/GalleryLayout'
import HeroSection from '@/components/home/hero-section/HeroSection'

import LatestTopicSection from '@/components/home/latest-topic/LatestTopicSection'
import ResultSection from '@/components/home/results-section/ResultSection'
import GentlemendSection from '@/components/home/why-gentlemend/GentlemendSection'

import SearchTag from '@/components/home/search-tag/SearchTag'
import { TaxonomyType } from '@/data/types'
import FollowSection from '@/components/home/follow-section/FollowSection'
import CreateConfidenceSection from '@/components/home/create-confidence/CreateConfidenceSection'

const DEMO_CATS: TaxonomyType[] = [
	{
		id: '1',
		href: '/listing-stay-map',
		name: 'New Yourk',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	},
	{
		id: '2',
		href: '/listing-stay-map',
		name: 'Singapore',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '3',
		href: '/listing-stay-map',
		name: 'Paris',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '4',
		href: '/listing-stay-map',
		name: 'London',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	},
	{
		id: '5',
		href: '/listing-stay-map',
		name: 'Tokyo',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	},
	{
		id: '6',
		href: '/listing-stay-map',
		name: 'Maldives',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '7',
		href: '/listing-stay-map',
		name: 'Italy',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
]

const DEMO_CATS_2: TaxonomyType[] = [
	{
		id: '1',
		href: '/listing-stay-map',
		name: 'Enjoy the great cold',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	},
	{
		id: '2',
		href: '/listing-stay-map',
		name: 'Sleep in a floating way',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '3',
		href: '/listing-stay-map',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '4',
		href: '/listing-stay-map',
		name: 'Cool in the deep forest',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '5',
		href: '/listing-stay-map',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '6',
		href: '/listing-stay-map',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
	},
	{
		id: '7',
		href: '/listing-stay-map',
		name: 'Cool in the deep forest',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
]

function PageHome() {
	return (
		<main className="nc-PageHome relative overflow-hidden">
			<HeroSection />
			<CategoriesSection />
			<GalleryLayout />
			<SearchTag />
			<ResultSection />
			<LatestTopicSection />
			<GentlemendSection />
			<CreateConfidenceSection/>
			<FollowSection/>

			{/* GLASSMOPHIN */}
			{/* <BgGlassmorphism /> */}

			{/* <div className="container relative mb-24 space-y-24 lg:mb-28 lg:space-y-28"> */}
			{/* SECTION HERO */}
			{/* <SectionHero className="pt-10 lg:pb-16 lg:pt-16" /> */}

			{/* SECTION 1 */}
			{/* <SectionSliderNewCategories categories={DEMO_CATS} />

				<SectionOurFeatures />

				<SectionGridFeaturePlaces cardType="card2" />

				<SectionHowItWork />

				<div className="relative py-16">
					<BackgroundSection className="bg-orange-50 dark:bg-black/20" />
					<SectionSliderNewCategories
						categories={DEMO_CATS_2}
						categoryCardType="card4"
						itemPerRow={4}
						heading="Suggestions for discovery"
						subHeading="Popular places to stay that Chisfis recommends for you"
						sliderStyle="style2"
					/>
				</div>

				<SectionSubscribe2 />

				<div className="relative py-16">
					<BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20" />
					<SectionGridAuthorBox />
				</div>

				<SectionGridCategoryBox />

				<div className="relative py-16">
					<BackgroundSection />
					<SectionBecomeAnAuthor />
				</div>

				<SectionSliderNewCategories
					heading="Explore by types of stays"
					subHeading="Explore houses based on 10 types of stays"
					categoryCardType="card5"
					itemPerRow={5}
				/>

				<SectionVideos />

				<div className="relative py-16">
					<BackgroundSection />
					<SectionClientSay />
				</div>
			</div> */}
		</main>
	)
}

export default PageHome
