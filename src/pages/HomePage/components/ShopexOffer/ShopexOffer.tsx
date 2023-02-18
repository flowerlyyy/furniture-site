import './ShopexOffer.scss';
import car from '../ShopexOffer/Group.png';
import money from '../ShopexOffer/cashback 1.png';
import medal from '../ShopexOffer/Group (1).png';
import telephone from '../ShopexOffer/24-hours-support 1.png';
import { ShopexComponents } from '../ShopexComponents/ShopexComponents';
export const ShopexOffer=()=>{
    const offers = [
        {
          id: 1,
          supportIcon: car,
          supportall: '24/7 Support',
          supportParagraph: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. \n Massa purus gravida.',
        },
        {
          id: 2,
          supportIcon: money,
          supportall: '24/7 Support',
          supportParagraph: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit.\n Massa purus gravida.',
        },
        {
          id: 3,
          supportIcon: medal,
          supportall: '24/7 Support',
          supportParagraph: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit.\n Massa purus gravida.',
        },
        {
          id: 4,
          supportIcon: telephone,
          supportall: '24/7 Support',
          supportParagraph: 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. \n Massa purus gravida.',
        },
    ];
    return(
<>
<div className="shopex-offer">
    <h1 className="offer-heading">What Shopex Offer!</h1>
    <div className="four-support">
{offers.map((offer, index) => (
          <ShopexComponents key={index} supportIcon={offer.supportIcon}  supportall={offer.supportall} supportParagraph={offer.supportParagraph}  />
        ))}
</div>
</div>
</>
    );
};