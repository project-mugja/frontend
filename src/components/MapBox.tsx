
import { IMapProps } from "../interface";
import {CustomOverlayMap, Map, MapMarker} from "react-kakao-maps-sdk";


function MapBox({
    locationData:{lat, lng, level}, 
    mapSize:{height, width},
    markerData
}:IMapProps){
    return(
        <>
            <Map 
                center={{lat, lng}}
                style={{height, width}}
                level={level}
            >
                {markerData?.map((data, index) => 
                        <>
                            <CustomOverlayMap
                            position={{ lat: lat, lng: lng }}
                            yAnchor={1}
                            >
                                <div className="customoverlay">
                                    {data.MarkerComponent}
                                </div>
                            </CustomOverlayMap>
                            <MapMarker
                                opacity={0}
                                key={index} 
                                position={{
                                    lat:data.locationData.lat,
                                    lng:data.locationData.lng
                                }}
                            >
                            </MapMarker>
                      </>
                    )}
            </Map>
        </>
    )
}

export default MapBox;

