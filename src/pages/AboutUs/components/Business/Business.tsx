import './Business.scss';
import menworker from '../Business/Group 73.png';
export const Business=()=>{
    return(
<>
<div className='ecommerce-business'>
    <img src={menworker} alt="just-image"/>
    <div className='business-history'>
        <h1 className='fact-heading'>Know About Our Ecomerce <br/>Business, History</h1>
        <p className='fact-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br/> mattis aliquam, malesuada diam est. Malesuada 
            sem tristique amet erat vitae <br/> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <button className='about-us-button'>Contact us </button>
    </div>
</div>
</>
    );
};