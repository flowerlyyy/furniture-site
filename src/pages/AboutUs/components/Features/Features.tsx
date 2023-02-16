import './Features.scss';
import car from '../Features/Group.png';
import money from '../Features/cashback 1.png';
import medal from '../Features/Group (1).png';
import telephone from '../Features/24-hours-support 1.png';
export const Features=()=>{
    return(
<>
<div className="shopex-offer">
    <h1 className="offer-heading">Our Features</h1>
    <div className="four-support">
    <div className="support">
        <img className="icon" src={car} alt="car"/>
        <h1 className="all-day">Free Delivery</h1>
        <p className="support-paragraph">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
</div>
<div className="support">
    <img className="icon" src={money} alt="money"/>
    <h1 className="all-day">100% Cash Back</h1>
    <p className="support-paragraph">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
</div>
<div className="support">
    <img className="icon" src={medal} alt="medal"/>
    <h1 className="all-day">Quality Product</h1>
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