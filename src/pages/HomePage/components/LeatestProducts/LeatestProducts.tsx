import './LeatestProducts.scss';
import firstchair from '../LeatestProducts/Component 9..png';
import secondchair from '../LeatestProducts/Leatest product..png';
import thirdchair from '../LeatestProducts/Component 8..png';
import forthchair from '../LeatestProducts/Component 10..png';
import fifthchair from '../LeatestProducts/Component 11..png';
import sixthchair from '../LeatestProducts/Component 12..png';

export const LeatestProducts=()=>{
    return(
<>
<div className="leatest-products">
    <h1 className="product-heading">Leatest-products</h1>
    <div className="product-features">
        <span>New Arrival</span>
        <span>Best Seller</span>
        <span>Featured</span>
        <span>Special Offer</span>
    </div>
    <div className="sofa-types">
        <div className="sofa-characteristics">
            <img src={firstchair} alt="frame"/>
            <div className="sofa-text">
            <span className="handy-craft">Comfort Handy Craft</span>
            <span className="new-value">$42.00</span>
            <span className="old-value">$65.00</span>
            </div>
        </div>
        <div className="sofa-characteristics">
            <img src={secondchair} alt="frame"/>
            <div className="sofa-text">
            <span className="handy-craft">Comfort Handy Craft</span>
            <span className="new-value">$42.00</span>
            <span className="old-value">$65.00</span>
            </div>
        </div>
        <div className="sofa-characteristics">
            <img src={thirdchair} alt="frame"/>
            <div className="sofa-text">
            <span className="handy-craft">Comfort Handy Craft</span>
            <span className="new-value">$42.00</span>
            <span className="old-value">$65.00</span>
            </div>
        </div>
        <div className="sofa-characteristics">
            <img src={forthchair} alt="frame"/>
            <div className="sofa-text">
            <span className="handy-craft">Comfort Handy Craft</span>
            <span className="new-value">$42.00</span>
            <span className="old-value">$65.00</span>
            </div>
        </div>
        <div className="sofa-characteristics">
            <img src={fifthchair} alt="frame"/>
            <div className="sofa-text">
            <span className="handy-craft">Comfort Handy Craft</span>
            <span className="new-value">$42.00</span>
            <span className="old-value">$65.00</span>
            </div>
        </div>
        <div className="sofa-characteristics">
            <img src={sixthchair} alt="frame"/>
            <div className="sofa-text">
            <span className="handy-craft">Comfort Handy Craft</span>
            <span className="new-value">$42.00</span>
            <span className="old-value">$65.00</span>
            </div>
        </div>
    </div>
</div>
</>
    );
};