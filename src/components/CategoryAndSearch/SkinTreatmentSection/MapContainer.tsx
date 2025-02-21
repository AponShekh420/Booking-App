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

const mapLat = [
  { id: 1, lat: 51.5074, lng: -0.1278 },  // Central London
  { id: 2, lat: 51.509, lng: -0.128 },    // Slightly East
  { id: 3, lat: 51.512, lng: -0.130 },    // Slightly North-East
  { id: 4, lat: 51.503, lng: -0.119 },    // Slightly West
  { id: 5, lat: 51.510, lng: -0.132 },    // South-East
  { id: 6, lat: 51.505, lng: -0.123 },    // West of the center
  { id: 7, lat: 51.515, lng: -0.133 },    // North-East
  { id: 8, lat: 51.501, lng: -0.126 },    // Near Westminster
  { id: 9, lat: 51.5076, lng: -0.129 },   // Slightly South-East
  { id: 10, lat: 51.504, lng: -0.121 },   // Near Covent Garden
  { id: 11, lat: 51.5095, lng: -0.134 },  // Slightly North-West
  { id: 12, lat: 51.513, lng: -0.128 },   // Near Tower Bridge
  { id: 13, lat: 51.511, lng: -0.135 },   // South-West of Central
  { id: 14, lat: 51.508, lng: -0.136 },   // Near Piccadilly Circus
  { id: 15, lat: 51.506, lng: -0.118 },   // South of Oxford Street
  { id: 16, lat: 51.514, lng: -0.120 },   // Near Regents Park
  { id: 17, lat: 51.5105, lng: -0.122 },  // South of Covent Garden
  { id: 18, lat: 51.502, lng: -0.125 },   // North-East of Soho
  { id: 19, lat: 51.516, lng: -0.129 },   // South-West of Camden
  { id: 20, lat: 51.5055, lng: -0.122 },  // Near St. James's Park
];

const MapContainer: FC<MapContainerProps> = ({
  currentHoverID = -1,
  DEMO_DATA,
  listingType,
}) => {
  // Merge mapLat data with DEMO_DATA using a unique key, e.g., id
  const updatedData = DEMO_DATA.map((item, index) => {
    const mapCoordinates = mapLat[index];
    return mapCoordinates
      ? {
          ...item,
          map: mapCoordinates,  // Assign the lat/lng from the mapLat array
        }
      : item;
  });

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
