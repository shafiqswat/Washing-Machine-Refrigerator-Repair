/** @format */
"use client";
import React, { useCallback, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MapComponent = ({ center, zoom }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
      ],
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: false,
      fullscreenControl: true,
    });

    // Add custom marker
    const marker = new window.google.maps.Marker({
      position: center,
      map: map,
      title: "AppliancePro - Expert Repair Services",
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: "#3B82F6",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 3,
      },
    });

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px; font-family: 'Inter', sans-serif;">
          <h3 style="color: #1f2937; font-weight: bold; margin: 0 0 8px 0;">AppliancePro</h3>
          <p style="color: #6b7280; margin: 0 0 8px 0;">Expert Appliance Repair Services</p>
          <p style="color: #3b82f6; margin: 0; font-weight: 500;">📞 +60 11-2118 1615</p>
        </div>
      `,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }, [center, zoom]);

  return <div ref={ref} className="w-full h-full rounded-2xl overflow-hidden" />;
};

const MapLoadingComponent = () => (
  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Map...</p>
    </div>
  </div>
);

const MapErrorComponent = () => (
  <div className="w-full h-full bg-red-50 rounded-2xl flex items-center justify-center border border-red-200">
    <div className="text-center p-6">
      <div className="text-red-500 text-4xl mb-4">📍</div>
      <h3 className="text-red-700 font-semibold mb-2">Map Unavailable</h3>
      <p className="text-red-600 text-sm">Unable to load Google Maps</p>
    </div>
  </div>
);

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <MapLoadingComponent />;
    case Status.FAILURE:
      return <MapErrorComponent />;
    case Status.SUCCESS:
      return (
        <MapComponent
          center={{ lat: 2.99281, lng: 101.786753 }}
          zoom={15}
        />
      );
    default:
      return <MapLoadingComponent />;
  }
};

const GoogleMap = () => {
  return (
    <div className="relative">
      {/* Map Container */}
      <div className="h-96 w-full relative overflow-hidden rounded-2xl shadow-lg border border-gray-200">
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          render={render}
          libraries={["marker"]}
        />
      </div>
      
      {/* Floating Address Card */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 max-w-xs">
        <div className="flex items-start">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shrink-0">
            <span className="text-white text-lg">📍</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Visit Our Location</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Professional appliance repair services at your location
            </p>
          </div>
        </div>
      </div>

      {/* Floating Quick Actions */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button 
          onClick={() => window.open(`https://www.google.com/maps?q=${2.99281},${101.786753}`, '_blank')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <span>🗺️</span>
          <span>Get Directions</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleMap;