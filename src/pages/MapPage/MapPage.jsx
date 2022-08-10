import Map, { Marker, Popup } from 'react-map-gl';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as pinsAPI from '../../utilities/pins-api';

export default function MapPage({ user, setUser }) {
    const [showPopup, setShowPopup] = React.useState(true);
    const [pins, setPins] = useState([]);

    const [viewState, setViewState] = React.useState({
        latitude: 33.9799,
        longitude: -118.4370,
        zoom: 13
    });

    const getPins = async () => {
        const pins = await pinsAPI.getAll();
        setPins(pins);
        console.log(pins)
    };
    useEffect(() => {
        getPins()
    }, []);


    return (
        <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAP}
        >
            {pins.map((pin) => (

            
                <Marker
                    key={pin._id}
                longitude={pin.long}
                latitude={pin.lat}
                color="var(--peach)">
            </Marker>  
                // {/* <Popup longitude={-118.4370}
                //     latitude={33.9799}
                //     closeButton={true}
                //     closeOnClick={false}
                //     anchor="left"
                //     onClose={() => setShowPopup(false)}>
                //     <div className="card text-center">
                //         <div className='card-header'>Place</div>
                //         <div className='card-body'>
                //             <span>Rating</span>
                //             <p className='card-text'>Review</p>
                //         </div>
                //         <div className='card-footer text-muted'>created by {user.name}
                //         </div>
                //     </div>
                //     </Popup> */}
                    ))}
    </Map>
    )
}