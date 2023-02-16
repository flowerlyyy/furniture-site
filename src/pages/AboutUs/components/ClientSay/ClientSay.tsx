import './ClientSay.scss';
import threeclient from '../ClientSay/Group 200.png';
export const ClientSay=()=>{
    return(
<>
<div className='clientsay-frame'>
    <div className='client-say'>
        <h1 className='client-first-heading'>Our Client Say!</h1>
        <img className='three-client' src={threeclient} alt="threeclient"/>
        <h2 className='client-second-heading'>Selina Gomez</h2>
        <h3 className='client-third-heading'>Ceo At Webecy Digital</h3>
        <p className='client-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br/> aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. 
        Tristique ultrices dolor <br/> aliquam lacus volutpat praesent.</p>
    </div>
</div>
</>
    );
};