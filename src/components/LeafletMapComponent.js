/** @format */
"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const markerPosition = [2.99281, 101.786753];
const mapCenter = [2.994085, 101.7811526];

const LeafletMapComponent = () => {
  // Fix Leaflet marker icon for Next.js
  React.useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src || markerIcon2x,
      iconUrl: markerIcon.src || markerIcon,
      shadowUrl: markerShadow.src || markerShadow,
    });
  }, []);
  // Google Maps link for the location
  const googleMapsUrl =
    "https://www.google.com/maps/place/Javed+Tohedi+Enterprise/@2.994085,101.7811526,15z/data=!4m6!3m5!1s0x31cdcb9987b9911f:0x2b510ca57f2000e1!8m2!3d2.99281!4d101.786753!16s%2Fg%2F11t828m9q_?entry=ttu";

  // Track drag state
  const isDraggingRef = React.useRef(false);

  const handleMapDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleMapDragEnd = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 100); // short delay to avoid click after drag
  };

  const handleMapClick = (e) => {
    if (!isDraggingRef.current) {
      window.open(googleMapsUrl, "_blank");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "220px",
        borderRadius: "0.75rem",
        overflow: "hidden",
      }}
      className='shadow-lg border border-gray-800 cursor-pointer'
      onClick={handleMapClick}>
      <MapContainer
        center={mapCenter}
        zoom={15}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
        doubleClickZoom={true}
        dragging={true}
        zoomControl={true}
        touchZoom={true}
        boxZoom={true}
        keyboard={true}
        eventHandlers={{
          dragstart: handleMapDragStart,
          dragend: handleMapDragEnd,
        }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={markerPosition}>
          <Popup>
            Javed Tohedi Enterprise
            <br />
            2.99281, 101.786753
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMapComponent;
