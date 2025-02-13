import RedButton from '../RedButton'
import Card from './Card'

const GiftWalletSection = () => {
	return (
		<div>
			<div className="mt-[54px]">
				<Card />
				<div className="m-auto mt-10 w-11/12 lg:mt-16">
					<h3 className="text-xl font-bold lg:text-lg">
						Give the Gift of Self-Care
					</h3>
					<p className="text-md mt-1 leading-6 lg:mt-3 lg:leading-9">
						Surprise someone with a Gentlemend gift card—redeemable at any of
						our partner clinics!
					</p>
					<RedButton title="Send gift card" className="mt-7" />
				</div>
			</div>
		</div>
	)
}

export default GiftWalletSection
