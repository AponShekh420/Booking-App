import Wrapper from '@/components/common/Wrapper'
import confidence from '@/images/home/confidence.png'
import Image from 'next/image'
export default function CreateConfidenceSection() {
	return (
		<section>
			<Wrapper>
				<div>
					<div>
						<Image src={confidence} alt="confidence" />
					</div>
					<div>
						<h1>Action Creates Confidence</h1>
						<h4>
							Subscribe to Our Newsletter for Expert Tips, Exclusive Deals, and
							the Latest in Men&apos;s Treatments!
						</h4>
						<form>
							<div>
								<input type="text" />
								<button>SIGN UP</button>
							</div>
						</form>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
