import './Features.scss';
import car from '../Features/Group.png';
import money from '../Features/cashback 1.png';
import medal from '../Features/Group (1).png';
import telephone from '../Features/24-hours-support 1.png';
import { FeaturesComponents } from '../FeaturesComponents/FeaturesComponents';
export const Features=()=>{
    const iconboxes = [
        {
          id: 1,
          supportIcon: car,
          supportHeading:'Free Delivery' ,
          supportParagraph: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit.\n Massa purus gravida.',
        },
        {
          id: 2,
          supportIcon: money,
          supportHeading:'100% Cash Back',
          supportParagraph: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. \n Massa purus gravida.',
        },
        {
          id: 3,
          supportIcon: medal,
    supportHeading:'Quality Product',
    supportParagraph: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. \n Massa purus gravida.',
        },
        {
          id: 4,
          supportIcon:telephone,
          supportHeading:'24/7 Support',
          supportParagraph: 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. \n Massa purus gravida.',
        },
    ];
    return(
<>
<div className="shopex-offer">
    <h1 className="offer-heading">Our Features</h1>
    <div className="four-support">
{iconboxes.map((iconbox, index) => (
          <FeaturesComponents key={index} supportIcon={iconbox.supportIcon}  supportHeading={iconbox.supportHeading} supportParagraph={iconbox.supportParagraph}  />
        ))}
</div>
</div>
</>
    );
};