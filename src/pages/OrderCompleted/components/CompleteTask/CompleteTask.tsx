import './CompleteTask.scss';
import pinktick from '../CompleteTask/Group 267.png';
export const CompleteTask=()=>{
    return(
<>
<div className='tick-order'>
    <img src={pinktick} alt="pinktick"/>
      <h1 className='order-heading'>Your Order Is Completed! </h1>
    <p className='order-paragraph'>Thank you for your order! Your order is being processed and will be completed within 3-6 <br/> hours. You will receive an 
    email confirmation when your order is completed.</p>
    <button className='continue-shopping'>Continue Shopping</button>
    </div>
</>
    );
};