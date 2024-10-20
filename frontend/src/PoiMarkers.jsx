import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const PoiMarkers = ({ pois, background, glyphColor, borderColor }) => {
  return (
    <>
      {pois.map((poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
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