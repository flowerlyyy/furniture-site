import './InformationAboutUs.scss';
import threecircle from '../InformationAboutUs/Group 94.png';
import bluecircle from '../InformationAboutUs/Ellipse 44.png';
import pinkcircle from '../InformationAboutUs/Ellipse 45.png';
import orangecircle from '../InformationAboutUs/Ellipse 46.png';
import greencircle from '../InformationAboutUs/Group 97.png';
export const InformationAboutUs=()=>{
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
        <div className='contact-part'>
            <img src={bluecircle} className='colored-circle'/>
            <div className='phone-gmail'>
                <p className='contact-address'>Tel: 877-67-88-99</p>
                <p className='contact-address'>E-Mail: shop@store.com</p>
            </div>
        </div>
        <div className='contact-part'>
            <img src={pinkcircle} className='colored-circle'/>
            <div className='phone-gmail'>
                <p className='contact-address'>Tel: 877-67-88-99</p>
                <p className='contact-address'>E-Mail: shop@store.com</p>
            </div>
        </div>
        <div className='contact-part'>
            <img src={orangecircle} className='colored-circle'/>
            <div className='phone-gmail'>
                <p className='contact-address'>Tel: 877-67-88-99</p>
                <p className='contact-address'>E-Mail: shop@store.com</p>
            </div>
        </div>
        <div className='contact-part'>
            <img src={greencircle} className='colored-circle'/>
            <div className='phone-gmail'>
                <p className='contact-address'>Tel: 877-67-88-99</p>
                <p className='contact-address'>E-Mail: shop@store.com</p>
            </div>
        </div>
    </div>
 </div>
</div>
</>
    );
};