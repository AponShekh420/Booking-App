import FollowSection from "@/components/article-two/follow-section/FollowSection";
import LatestTopicSection from "@/components/article-two/latest-topic/LatestTopicSection";
import NearbySection from "@/components/article-two/nearby/NearbySection";
import SubscribeSection from "@/components/article-two/subscribe/SubscribeSection";
import TrunBackSection from "@/components/article-two/trun-back/TrunBackSection";
import Wrapper from "@/components/common/Wrapper";

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
