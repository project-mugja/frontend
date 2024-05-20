import Map from "../components/Map";
import { IMapProps } from "../interface/IMap";

function SamplePage(){
    const locationData:IMapProps = { lat:33.450701, lng: 126.570667, level:3} 
    return(
        <>
            <Map {...locationData}/>
        </>
    )
}

export default SamplePage;