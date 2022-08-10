import Map, { Marker, Popup } from 'react-map-gl';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as pinsAPI from '../../utilities/pins-api';

export default function MapPage({ user, setUser }) {
    const currentUser = user;
    const [showPopup, setShowPopup] = useState([]);
    const [pins, setPins] = useState([]);
    const [addPin, setAddPin] = useState(null);
    const [addtitle, setAddTitle] = useState(null);
    const [addRating, setAddRating] = useState(0);
    const [addDetail, setAddDetail] = useState(null);

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

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const newPin = {
            user: currentUser,
            title: addtitle,
            detail: addDetail,
            rating: addRating,
            lat: addPin.lat,
            lng: addPin.lng
        };
        const updatePins = await pinsAPI.addPin(pins);
        setPins(updatePins)
    }
        

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
                        longitude={pin.lng}
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
                    <div className="card">
                        <form onSubmit={handleSubmit} className="form-group p-3">
                            <input className="form-control" type="text" name="title" placeholder='name of the place' onChange={(evt)=>setAddTitle(evt.target.value)} />
                            <div className="btn-group" role="group" name="rating" onChange={(evt)=>setAddRating(evt.target.value)}>
                                <button type="button" className="btn btn-outline-secondary">1</button>
                                <button type="button" className="btn btn-outline-secondary">2</button>
                                <button type="button" className="btn btn-outline-secondary">3</button>
                                <button type="button" className="btn btn-outline-secondary">4</button>
                                <button type="button" className="btn btn-outline-secondary">5</button>
                            </div>
                            <input className='form-control' type="text" placeholder='add your notes' name="detail" onChange={(evt)=>setAddDetail(evt.target.value)} />
                            <button className="btn border" type="submit">ADD</button>
                        </form>
                    </div>
                </Popup>
            ) : null}
    </Map>
    )
}