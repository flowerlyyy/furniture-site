import { ContactUsHeading } from './components/ContactUsHeading/ContactUsHeading';
import { GetInTouch } from './components/GetInTouch/GetInTouch';
import { InformationAboutUs } from './components/InformationAboutUs/InformationAboutUs';
import './ContactUs.scss';
export const ContactUs=()=>{
    return(
<>
<ContactUsHeading/>
<InformationAboutUs/>
<GetInTouch/>
</>
    );
};