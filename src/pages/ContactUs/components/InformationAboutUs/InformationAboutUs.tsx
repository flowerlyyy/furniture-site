import './InformationAboutUs.scss';
import threecircle from '../InformationAboutUs/Group 94.png';
import bluecircle from '../InformationAboutUs/Ellipse 44.png';
import pinkcircle from '../InformationAboutUs/Ellipse 45.png';
import orangecircle from '../InformationAboutUs/Ellipse 46.png';
import greencircle from '../InformationAboutUs/Group 97.png';
import { ContactComponents } from '../ContactComponents/ContactComponents';
export const InformationAboutUs=()=>{
    const parts = [
        {
          id: 1,
          circleColor:bluecircle ,
    contactTel: 'Tel: 877-67-88-99',
    contactGmail: 'E-Mail: shop@store.com',
        },
        {
          id: 2,
          circleColor: pinkcircle,
    contactTel: 'Support Forum',
    contactGmail: 'For over 24hr',
        },
        {
          id: 3,
          circleColor: orangecircle,
    contactTel: '20 Margaret st, London',
    contactGmail: 'Great britain, 3NM98-LK',
        },
        {
          id: 4,
          circleColor: greencircle,
    contactTel: 'Free standard shipping',
    contactGmail: 'on all orders.',
        },
    ];
    return(
<>
<div className='information-contact'>
   <div className='contact-us-part'>
      <h1 className='information-first-heading'>Information About us</h1>
<p className='information-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br/> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae 
<br/> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
 <img className='three-circle' src={threecircle} alt="threecircle"/>
 </div>
 <div className='contact-way'>
    <h1 className='way-heading'>Contact Way</h1>
    <div className='circle-contact'>
    {parts.map((part, index) => (
          <ContactComponents key={index} circleColor={part.circleColor}  contactTel={part.contactTel} contactGmail={part.contactGmail}  />
        ))}
    </div>
 </div>
</div>
</>
    );
};