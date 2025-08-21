import DG from "2gis-maps"
import { useEffect } from "react"
import { FaMapMarker } from "react-icons/fa";
export const Map = () =>{
    useEffect(()=>{
        let map
        map = DG.map('map-container',{
            center:[51.8106445678408, 107.59736180305482],
            zoom:17
        })
        DG.marker([51.8106445678408, 107.59736180305482]).addTo(map)
        return () => map && map.remove();
    },[])
    return(
        <div className="mapBox">
            <div className="map">
                <div className="wrap" id="map-container" style={{width:'100%',height:'100%'}}>

                </div>
            </div>
            <a target="_blank" href="https://2gis.ru/ulanude/branches/70000001087699471/firm/70000001087699472/107.597325%2C51.810483/tab/reviews/addreview?utm_source=widget_firm">
            <div className="button">
                Оставить отзыв
            </div></a>
        </div>

    )
}