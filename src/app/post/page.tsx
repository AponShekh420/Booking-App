import FollowSection from "@/components/single-post/follow-section/FollowSection";
import LatestTopicSection from "@/components/single-post/latest-topic/LatestTopicSection";
import SubscribeSection from "@/components/single-post/subscribe/SubscribeSection";
import TrunBackSection from "@/components/single-post/trun-back/TrunBackSection";
import Wrapper from "@/components/common/Wrapper";
import NearbySection from "@/components/single-post/nearby/NearbySection";

export default function page() {
	return (
		<main>
			<Wrapper>
				<TrunBackSection/>
				<NearbySection/>
				<LatestTopicSection/>
				<SubscribeSection/>
				<FollowSection/>
			</Wrapper>
		</main>
	)
}
