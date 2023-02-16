import './GetInTouch.scss';
import contactgirl from '../GetInTouch/Group 124.png';
export const GetInTouch=()=>{
    return(
<>
<div className='get-in-touch'>
<div className='touch-answer'>
    <h1  className='touch-heading'>Get In Touch</h1>
    <p className='touch-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br/> tristique amet erat vitae eget dolor 
    los vitae lobortis quis bibendum quam.</p>
    <div className='name-email'>
        <input style={{width: "250px", height: "45px"}} className="touch-input" type="text" placeholder='Your name*'/>
        <input style={{width: "255px", height: "45px"}} className="touch-input" type="text" placeholder='Your E-mail*'/>
    </div>
    <input style={{width: "534px" , height: "45px", marginTop: "34px"}} className="touch-input" type="text" placeholder='Subject*'/>
    <input style={{width: "534px", height: "166px", marginTop: "47px"}} className="touch-input" type="text" placeholder='Type Your Message*'/>
    <button className='touch-send'>Send Mail</button>
</div>
<img src={contactgirl} alt="girl"/>
</div>
</>
    );
};