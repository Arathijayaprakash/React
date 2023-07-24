import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./StoreLocator.css";

const StoreLocator = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const response = await fetch(
        "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/store.json"
      );
      const data = await response.json();
      const loadedStoreDetails = [];
      for (const key in data) {
        loadedStoreDetails.push({
          id: key,
          name: data[key].name,
          address: data[key].address,
          longitude: data[key].longitude,
          latitude: data[key].latitude,
          phone: data[key].phone,
          openingTime: data[key].openingTime,
          closingTime:data[key].closingTime
        });
      }
      setStores(loadedStoreDetails);
    };
    fetchStores();
  }, []);

  return (
    <div>
      <MapContainer
        center={[9.940009, 76.250695]}
        zoom={13}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy;<a>href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((store) => (
          <Marker
            key={store.id}
            position={{ lat: store.latitude, lng: store.longitude }}
          >
            <Popup>
              {" "}
              <h3>{store.name}</h3>
              <p>{store.address}</p>
              <p style={{color:'GrayText'}}>Open : {store.openingTime} to {store.closingTime}</p>
              <p>Contact : {store.phone}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default StoreLocator;
