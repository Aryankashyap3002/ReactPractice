import Stages from "./imageUtilityfunction";

export function StagesOfGame ({level}) {

    const images = Stages;

    return (
        <div>
            {level <= images.length -1 ? (<img src={images[level]} alt="" />) : (<div>LOST</div>) }
            
        </div>
    )
    
}