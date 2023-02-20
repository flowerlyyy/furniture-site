import './FurnitureCollection.scss';
import lampa from '../FurnitureCollection/image 32.png';
import pinksofa from '../FurnitureCollection/sofa promotional header.png';
export const FurnitureCollection=()=>{
    return(
<>
<div className="furniture-collection">
    <div className="pink-sofa">
        <img className="lampa" src={lampa} alt="lampa"/>
        <div className="best-furniture">
            <p className="castle">Best Furniture For Your Castle....</p>
            <h1 className="explanation">New Furniture Collection <br/> Trends in 2020</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br/> in phasellus non in justo.</p>
            <a href='/grid-default'><button className="buy-now">Shop Now</button></a>
        </div>
        <img src={pinksofa} alt="pink-sofa" />
    </div>
</div>
</>
    );
};