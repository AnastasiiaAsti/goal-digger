import Map, { Marker, Popup } from 'react-map-gl';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as pinsAPI from '../../utilities/pins-api';

export default function MapPage({ user, setUser }) {
    const currentUser = user;
    const [showPopup, setShowPopup] = useState([]);
    const [pins, setPins] = useState([]);
    const [addPin, setAddPin] = useState(null);

    const [viewState, setViewState] = useState({
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

    const handleAddPin = (evt) => {
        console.log(evt.lngLat);
        const { lng, lat } = evt.lngLat
        setAddPin({lng, lat});
    };


    return (
        <Map
            {...viewState}
            onClick={handleAddPin}
            mapStyle="mapbox://styles/asticodes/cl6mnzcr8004s15pcf6fotw2b"
            onMove={evt => setViewState(evt.viewState)}
            style={{ width: "100vw", height: "100vh" }}
            mapboxAccessToken={process.env.REACT_APP_MAP}
        >
            {pins.map((pin) => (
                <>
                    <Marker
                        key={pin._id}
                        longitude={pin.long}
                        latitude={pin.lat}
                        style={{cursor:"pointer", color: pin.username === currentUser ? "var(--pin)" : "var(--light-blue)"}}
                        onClick={() =>
                            setShowPopup({
                                [pin._id]: true,
                            })}>
                    </Marker>  
                    {showPopup[pin._id] ? (
                        <Popup
                            longitude={pin.long}
                            latitude={pin.lat}
                            closeButton={true}
                            closeOnClick={false}
                            anchor="left"
                            onClose={() => setShowPopup({})}>
                            <div className="card text-center">
                                <div className='card-header'>{pin.title}</div>
                                <div className='card-body'>
                                    <span>Rating: {pin.rating}</span>
                                    <p className='card-text'>"{pin.detail}"</p>
                                </div>
                                <div className='card-footer text-muted'>created by {pin.user}
                                </div>
                            </div>
                        </Popup>
                    ) : null}
                    </>
            ))}
            {addPin ? (
                <Popup
                    longitude={addPin.lng}
                    latitude={addPin.lat}
                    closeButton={true}
                    closeOnClick={false}
                    anchor="left"
                    onClose={() => setAddPin(null)}>
                    <p>pin</p>
                </Popup>
            ) : null}
    </Map>
    )
}


  {/* <div className="card text-center">
                                <div className='card-header'>{pin.title}</div>
                                <div className='card-body'>
                                    <span>Rating: {pin.rating}</span>
                                    <p className='card-text'>"{pin.detail}"</p>
                                </div>
                                <div className='card-footer text-muted'>created by {pin.user}
                                </div>
                            </div> */}