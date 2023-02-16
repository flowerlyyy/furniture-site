import './AboutUs.scss';
import { AboutUsHeading } from './components/AboutUsHeading/AboutUsHeading';
import { Business } from './components/Business/Business';
import { ClientSay } from './components/ClientSay/ClientSay';
import { Features} from './components/Features/Features';
export const AboutUs=()=>{
    return(
<>
<AboutUsHeading/>
<Business/>
<Features/>
<ClientSay/>
</>
    );
};