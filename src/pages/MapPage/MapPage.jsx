import Map from 'react-map-gl';
import * as React from 'react';

export default function MapPage() {
    const [viewState, setViewState] = React.useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
    });
    return (
        <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAP}
    >
    </Map>
    )
}