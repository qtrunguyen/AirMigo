import { useMap, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const PoiMarkers = ({
    pois,
    updateLatLng,
    latitude,
    longitude,
    fetchData,
    setOpenChat,
    addCircle,
}) => {
    const map = useMap();
    
    const circle = new google.maps.Circle({
        strokeColor: "#cbfd56",
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: "gray" || "#cbfd56",
        fillOpacity: 0.1,
        map: map,
        center: { lat: latitude, lng: longitude },
        radius: 1200,
    });
    addCircle(circle);

    const handleDrag = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        updateLatLng(lat, lng, map);
        fetchData();
        setOpenChat(true);
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
                        scale={1.3}
                    />
                    <Circle />
                </AdvancedMarker>
            ))}
        </>
    );
};

export default PoiMarkers;
