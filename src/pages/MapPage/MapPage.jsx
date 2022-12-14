import Map, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { useState, useEffect } from "react";
import * as pinsAPI from "../../utilities/pins-api";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function MapPage({ user, setUser }) {
  const [showPopup, setShowPopup] = useState([]);
  const [pins, setPins] = useState([]);
  const [addPin, setAddPin] = useState(null);
  const [addtitle, setAddTitle] = useState(null);
  const [addRating, setAddRating] = useState(5);
  const [addDetail, setAddDetail] = useState(null);

  const [viewState, setViewState] = useState({
    latitude: 33.9799,
    longitude: -118.437,
    zoom: 13,
  });

  const getPins = async () => {
    const pins = await pinsAPI.getAll();
    setPins(pins);
    console.log(pins);
  };
  useEffect(() => {
    getPins();
  }, []);

  const handleAddPin = (evt) => {
    console.log(evt.lngLat);
    const { lng, lat } = evt.lngLat;
    setAddPin({ lng, lat });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const newPin = {
      user: user,
      title: addtitle,
      detail: addDetail,
      rating: addRating,
      lat: addPin.lat,
      lng: addPin.lng,
    };
    const updatePins = await pinsAPI.addPin(newPin);
    setPins([...pins, updatePins]);
  };

  return (
    <Map
      {...viewState}
      onDblClick={handleAddPin}
      mapStyle="mapbox://styles/asticodes/cl6mnzcr8004s15pcf6fotw2b"
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100vw", height: "100vh" }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      {pins.map((pin) => (
        <>
          <Marker
            key={pin._id}
            longitude={pin.lng}
            latitude={pin.lat}
            color="black"
            style={{
              cursor: "pointer",
            }}
            onClick={() =>
              setShowPopup({
                [pin._id]: true,
              })
            }
          ></Marker>
          {showPopup[pin._id] ? (
            <Popup
              longitude={pin.lng}
              latitude={pin.lat}
              closeButton={true}
              closeOnClick={false}
              anchor="left"
              onClose={() => setShowPopup({})}
            >
              <div className="card text-center">
                <div className="card-header display-6">{pin.title}</div>
                <div className="card-body">
                  <span>Rating: {pin.rating}</span>
                  <h4 className="card-text">"{pin.detail}"</h4>
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
          onClose={() => setAddPin(null)}
        >
          <div className="popup-add">
            <form onSubmit={handleSubmit} className="form-group p-3">
              <input
                className="form-control"
                type="text"
                name="title"
                placeholder="name of the place"
                onChange={(evt) => setAddTitle(evt.target.value)}
              />
              <div
                className="btn-group mt-4"
                role="group"
                name="rating"
                onChange={(evt) => setAddRating(evt.target.value)}
              >
                <button
                  type="button bg-light"
                  className="btn btn-outline-light"
                >
                  1
                </button>
                <button type="button" className="btn btn-outline-light">
                  2
                </button>
                <button type="button" className="btn btn-outline-light">
                  3
                </button>
                <button type="button" className="btn btn-outline-light">
                  4
                </button>
                <button type="button" className="btn btn-outline-light">
                  5
                </button>
              </div>
              <input
                className="form-control mt-4"
                type="text"
                placeholder="add your notes"
                name="detail"
                onChange={(evt) => setAddDetail(evt.target.value)}
              />
              <button
                className="btn border mt-4 form-control bg-light"
                type="submit"
              >
                ADD
              </button>
            </form>
          </div>
        </Popup>
      ) : null}
    </Map>
  );
}
