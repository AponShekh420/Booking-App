import { CarDataType, ExperiencesDataType, StayDataType } from '@/data/types'
import Checkbox from '@/shared/Checkbox'
import {
	AdvancedMarker,
	ControlPosition,
	Map,
	MapControl,
} from '@vis.gl/react-google-maps'
import { FC } from 'react'
import AnyReactComponent from './AnyReactComponent'
import { DEMO_STAY_LISTINGS } from '@/data/listings'


interface MapContainerProps {
	currentHoverID: string | number
	DEMO_DATA: CarDataType[] | ExperiencesDataType[] | StayDataType[]
	listingType: 'car' | 'experiences' | 'stay'
}

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12)



const MapContainer = () => {
	return (
		<div className='w-full xl:h-[300px] md:h-[200px] lg:h-[230px] h-60 xs:h-72 sm:h-80 rounded-[10px] overflow-hidden'>
			{/* BELLOW IS MY GOOGLE API KEY -- PLEASE DELETE AND TYPE YOUR API KEY */}
			<Map
				style={{
					width: '100%',
					height: '100%',
				}}
				defaultZoom={12}
				defaultCenter={{ "lat": 55.1972153, "lng": 61.4407266 }}
				gestureHandling={'greedy'}
				mapId={'AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM'}
			>
				<MapControl position={ControlPosition.TOP_CENTER}>
					<div className="z-10 mt-5 min-w-max rounded-2xl bg-neutral-100 px-4 py-2 shadow-xl dark:bg-neutral-900">
						<Checkbox
							className="text-xs text-neutral-800 xl:text-sm"
							name="search_as_i_move"
							label="Search as I move the map"
						/>
					</div>
				</MapControl>
				<AdvancedMarker
					key={1}
					position={{ "lat": 55.1972153, "lng": 61.4407266 }}
					clickable
					onClick={() => console.log('clicked')}
				>
					<AnyReactComponent
						// isSelected={currentHoverID === item.id}
						key={16}
						lat={55.1972153}
						lng={61.4407266 }
						reviewStart={4.4}
					/>
				</AdvancedMarker>
			</Map>
		</div>
	)
}

export default MapContainer
