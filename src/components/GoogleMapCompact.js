/** @format */
"use client";
import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const CompactMapComponent = ({ center, zoom }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#c9c9c9" }],
        },
      ],
      disableDefaultUI: true,
      gestureHandling: "none",
      clickableIcons: false,
    });

    // Add custom marker
    new window.google.maps.Marker({
      position: center,
      map: map,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillColor: "#3B82F6",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
    });
  }, [center, zoom]);

  return <div ref={ref} className="w-full h-full rounded-xl overflow-hidden" />;
};

const CompactMapLoadingComponent = () => (
  <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

const CompactMapErrorComponent = () => (
  <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
    <div className="text-gray-500 text-2xl">📍</div>
  </div>
);

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <CompactMapLoadingComponent />;
    case Status.FAILURE:
      return <CompactMapErrorComponent />;
    case Status.SUCCESS:
      return (
        <CompactMapComponent
          center={{ lat: 2.99281, lng: 101.786753 }}
          zoom={14}
        />
      );
    default:
      return <CompactMapLoadingComponent />;
  }
};

const GoogleMapCompact = ({ height = "h-48" }) => {
  return (
    <div className={`${height} w-full relative overflow-hidden rounded-xl shadow-lg border border-gray-200`}>
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        render={render}
        libraries={["marker"]}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      
      {/* Location Badge */}
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md">
        <div className="flex items-center">
          <span className="text-blue-600 text-sm mr-1">📍</span>
          <span className="text-gray-700 text-xs font-medium">Service Area</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapCompact;