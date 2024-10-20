import { useMap, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const PoiMarkers = ({
    pois,
    updateLatLng,
    latitude,
    longitude,
}) => {
    const map = useMap();

    const handleDrag = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        updateLatLng(lat, lng, map);
    };

    return (
        <>
            {pois.map((poi, i) => (
                <AdvancedMarker
                    id={poi.key}
                    key={i}
                    position={{ lat: latitude, lng: longitude }}
                    draggable={true}
                    onDragEnd={handleDrag}
                >
                    <Pin
                        background={"#000000"}
                        glyphColor={"#ffffff"}
                        borderColor={"#cbfd56"}
                        scale={1.6}
                    />
                </AdvancedMarker>
            ))}
        </>
    );
};

export default PoiMarkers;
