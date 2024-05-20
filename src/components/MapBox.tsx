
import { IMapProps } from "../interface/IMap";
import {Map, MapMarker} from "react-kakao-maps-sdk";


function MapBox({
    locationData:{lat, lng, level}, 
    mapSize:{height, width},
    mapData
}:IMapProps){
    return(
        <>
            <Map 
                center={{lat, lng}}
                style={{height, width}}
                level={level}
            >
                {mapData?.map(data => 
                        <MapMarker 
                            position={{
                                lat:data.locationData.lat,
                                lng:data.locationData.lng
                            }}
                        >
                            {data.MarkerComponent}
                        </MapMarker>
                    )}
            </Map>
        </>
    )
}

export default MapBox;

