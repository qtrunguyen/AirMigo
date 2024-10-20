import { useMap, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const PoiMarkers = ({ pois, background, glyphColor, borderColor, updateLatLng }) => {
  const map = useMap()
  
    const handleDrag = (e) => {
        const lat = e.latLng.lat()
        const lng = e.latLng.lng()
        updateLatLng(lat, lng, map)
    };

    return (
        <>
            {pois.map((poi) => (
                <AdvancedMarker
                    key={poi.key}
                    position={poi.location}
                    draggable={true}
                    onDragEnd={handleDrag}
                >
                    <Pin
                        background={background}
                        glyphColor={glyphColor}
                        borderColor={borderColor}
                    />
                </AdvancedMarker>
            ))}
        </>
    );
};

export default PoiMarkers;
