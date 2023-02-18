import './LeatestProducts.scss';
import firstchair from '../LeatestProducts/Component 9..png';
import secondchair from '../LeatestProducts/Leatest product..png';
import thirdchair from '../LeatestProducts/Component 8..png';
import forthchair from '../LeatestProducts/Component 10..png';
import fifthchair from '../LeatestProducts/Component 11..png';
import sixthchair from '../LeatestProducts/Component 12..png';
import { LeatProComponents } from '../LeatProComponents/LeatProComponents';

export const LeatestProducts=()=>{
    const chairs = [
        {
          id: 1,
          sofaChair: firstchair,
    sofaCraft: 'Comfort Handy Craft' ,
    sofaNewValue: '$42.00',
    sofaOldValue: '$65.00' ,
        },
        {
          id: 2,
          sofaChair: secondchair,
          sofaCraft: 'Comfort Handy Craft' ,
          sofaNewValue: '$42.00',
          sofaOldValue: '$65.00' ,
        },
        {
          id: 3,
          sofaChair: thirdchair,
          sofaCraft: 'Comfort Handy Craft' ,
    sofaNewValue: '$42.00',
    sofaOldValue: '$65.00' ,
        },
        {
          id: 4,
          sofaChair: forthchair,
          sofaCraft: 'Comfort Handy Craft' ,
    sofaNewValue: '$42.00',
    sofaOldValue: '$65.00' ,
        },
        {
          id: 5,
          sofaChair: fifthchair,
          sofaCraft: 'Comfort Handy Craft' ,
          sofaNewValue: '$42.00',
          sofaOldValue: '$65.00' ,
        },
        {
            id:6,
            sofaChair: sixthchair,
            sofaCraft: 'Comfort Handy Craft' ,
    sofaNewValue: '$42.00',
    sofaOldValue: '$65.00' ,
        },
    ];
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
        {chairs.map((chair, index) => (
          <LeatProComponents key={index} sofaChair={chair.sofaChair}  sofaCraft={chair.sofaCraft} sofaNewValue={chair.sofaNewValue} sofaOldValue={chair.sofaOldValue}  />
        ))}
    </div>
</div>
</>
    );
};