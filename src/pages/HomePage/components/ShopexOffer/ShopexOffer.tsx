import './ShopexOffer.scss';
import car from '../ShopexOffer/Group.png';
import money from '../ShopexOffer/cashback 1.png';
import medal from '../ShopexOffer/Group (1).png';
import telephone from '../ShopexOffer/24-hours-support 1.png';
export const ShopexOffer=()=>{
    return(
<>
<div className="shopex-offer">
    <h1 className="offer-heading">What Shopex Offer!</h1>
    <div className="four-support">
    <div className="support">
        <img className="icon" src={car} alt="car"/>
        <h1 className="all-day">24/7 Support</h1>
        <p className="support-paragraph">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
</div>
<div className="support">
    <img className="icon" src={money} alt="money"/>
    <h1 className="all-day">24/7 Support</h1>
    <p className="support-paragraph">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
</div>
<div className="support">
    <img className="icon" src={medal} alt="medal"/>
    <h1 className="all-day">24/7 Support</h1>
    <p className="support-paragraph">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
</div>
<div className="support">
    <img className="icon" src={telephone} alt="telephone"/>
    <h1 className="all-day">24/7 Support</h1>
    <p className="support-paragraph">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
</div>
</div>
</div>
</>
    );
};