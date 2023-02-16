import './BackHome.scss';
import compfound from '../BackHome/Group 123.png';
export const BackHome=()=>{
    return(
<>
<div className='page-not-found'>
    <img src={compfound} alt="compfound"/>
    <button className='back-to-home'>Back to Home</button>
</div>
</>
    );
};