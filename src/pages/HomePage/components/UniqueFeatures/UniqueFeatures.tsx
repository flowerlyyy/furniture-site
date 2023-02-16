import './UniqueFeatures.scss';
import bluesofa from '../UniqueFeatures/Group 153 (1).png';
export const UniqueFeatures=()=>{
    return(
<>
<div className="common-sofa">
    <div className="unique-features">
        <img src={bluesofa} alt="bluesofa"/>
        <div className="second">
            <h1 className="paragraph">Unique Features Of leatest & <br/>Trending Poducts</h1>
            <ul className="list-features">
                <li className='red-circle'><span>All frames constructed with hardwood solids and laminates</span></li>
                <li className='blue-circle'><span>Reinforced with double wood dowels, glue, screw - nails corner <br/> blocks and machine nails</span></li>
                <li className='green-circle'><span>Arms, backs and seats are structurally reinforced</span></li>
            </ul>
            <div className="cards">
                <button className="addcard">Add to Card</button>
                <p className="value">B&B Italian Sofa <br/> $32.00</p>
            </div>
        </div>
    </div>
</div>
</>
    );
};