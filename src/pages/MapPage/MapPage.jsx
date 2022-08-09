import Map, {Marker} from 'react-map-gl';
import * as React from 'react';



export default function MapPage() {
    const [viewState, setViewState] = React.useState({
        latitude: 33.9799,
        longitude: -118.4370,
        zoom: 13
    });
    return (
        <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAP}
        >
            <Marker longitude={-118.4370} latitude={33.9799} color="var(--peach)">
    </Marker>  
    </Map>
    )
}