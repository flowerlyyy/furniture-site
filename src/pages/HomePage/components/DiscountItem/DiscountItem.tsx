import './DiscountItem.scss';
import sofacompact from '../DiscountItem/Group 154.png';
export const DiscountItem=()=>{
    return(
<>
<div className="discount-item">
    <h1 className="discount-heading">Discount item</h1>
    <div className="types">
        <p className="chair-type">Wood Chair</p>
        <p className="chair-type">Plastic Chair</p>
        <p className="chair-type">Sofa Colletion</p>
    </div>
    <div className="discount-of-products">
        <div className="twenty-discount">
          <h1 className="discount-second-heading">20% Discount Of All Products</h1>  
          <p className="pink-compact">Eams Sofa Compact</p>
          <p className="discount-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br/> feugiat habitasse nec, bibendum condimentum.</p>
          <ul className="sofa-features">
            <li>Material expose like metals</li>
            <li>Clear lines and geomatric figures</li>
            <li>Simple neutral colours.</li>
            <li>Simple neutral colours.</li>
          </ul>
        <a href='/grid-default'> <button className="discount-button">Shop Now</button></a>
        </div>
        <img src={sofacompact} alt="sofacompact"/>
    </div>
</div>
</>
    );
};