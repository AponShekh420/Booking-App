import { CarDataType, ExperiencesDataType, StayDataType } from '@/data/types'
import Checkbox from '@/shared/Checkbox'
import {
	AdvancedMarker,
	ControlPosition,
	Map,
	MapControl,
} from '@vis.gl/react-google-maps'
import { FC } from 'react'
import AnyReactComponent from './AnyReactComponent/AnyReactComponent'

interface MapContainerProps {
	currentHoverID: string | number
	DEMO_DATA: CarDataType[] | ExperiencesDataType[] | StayDataType[]
	listingType: 'car' | 'experiences' | 'stay'
}

const getRandomOffset = (min: number, max: number) => Math.random() * (max - min) + min;

const MapContainer: FC<MapContainerProps> = ({
	currentHoverID = -1,
	DEMO_DATA,
	listingType,
}) => {
	// Generate random locations within a small radius in London
	const updatedData = DEMO_DATA.map((item) => ({
		...item,
		map: {
			lat: 51.5074 + getRandomOffset(-0.05, 0.05), // Adjust for slight variation
			lng: -0.1278 + getRandomOffset(-0.05, 0.05), // Adjust for slight variation
		},
	}));

	return (
		<>
			<Map
				style={{ width: '100%', height: '100%' }}
				defaultZoom={12}
				defaultCenter={{ lat: 51.5074, lng: -0.1278 }}
				gestureHandling={'greedy'}
				mapId={'AIzaSyDoD_EENg9vuu47TDQtu1xSBxxSegUxGvM'}
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

				{updatedData.map((item) => (
					<AdvancedMarker key={item.id} position={item.map} clickable>
						<AnyReactComponent
							isSelected={currentHoverID === item.id}
							lat={item.map.lat}
							lng={item.map.lng}
							listing={item as StayDataType}
						/>
					</AdvancedMarker>
				))}
			</Map>
		</>
	);
};

export default MapContainer;

