import './DescriptionDetails.scss';
import arrow from '../DescriptionDetails/akar-icons_arrow-up.png';
export const DescriptionDetails=()=>{
    return(
<>
<div className='additional-info-frame'>
    <div className='additional-info'>
        <div className='description-navbar'>
            <a className='navbar-paragraph' href='#'>Description</a>
            <a className='navbar-paragraph' href='#'>Additional Info</a>
            <a className='navbar-paragraph'href='#'>Reviews</a>
            <a className='navbar-paragraph' href='#'>Video</a>
        </div>
    <h1 className='info-heading'>Varius tempor.</h1>
    <p className='info-paragraph'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes,
         mauris varius ac est bibendum.<br/> Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed 
         urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus <br/> cras justo, tortor sed donec tempus. Imperdiet consequat, 
         quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    <h1 className='more-details'>More details</h1>
    <div className='arrow-fact'>
        <img className='arrow-icon' src={arrow} alt="arrow"/>
        <p className='arrow-paragraph'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
    <div className='arrow-fact'>
        <img className='arrow-icon' src={arrow} alt="arrow"/>
        <p className='arrow-paragraph'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
    <div className='arrow-fact'>
        <img className='arrow-icon' src={arrow} alt="arrow"/>
        <p className='arrow-paragraph'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
    <div className='arrow-fact'>
        <img className='arrow-icon' src={arrow} alt="arrow"/>
        <p className='arrow-paragraph'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
</div>
</div>
</>
    );
};