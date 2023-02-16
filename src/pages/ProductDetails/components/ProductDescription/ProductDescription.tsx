import './ProductDescription.scss';
import productfacebook from '../ProductDescription/Group 202 (1).png';
import productinstagram from '../ProductDescription/Group 203 (1).png';
import producttwitter from '../ProductDescription/Group 204 (1).png';
import rating from '../ProductDescription/Group 236.png';
import image1 from '../ProductDescription/Rectangle 134.png';
import image2 from '../ProductDescription/Rectangle 136.png';
import image3 from '../ProductDescription/Rectangle 137.png';
import image4 from '../ProductDescription/Rectangle 138.png';
import hearticon from '../ProductDescription/uil_heart-alt.png';

export const ProductDescription=()=>{
    return(
<>
<div className='product-information'>
    <div className='product-images'>
        <img className='three-images' src={image4} alt="image4"/>
        <img src={image1} alt="image1"/>
        <img src={image2} alt="image2"/>
        <img src={image3} alt="image3"/>
        
    </div>
    <div className='product-fact'>
        <h1 className='product-name'>Playwood arm chair</h1>
        <div className='rating22'>
            <img className='rating-image' src={rating} alt="rating"/>
            <p className='rating-second'>(22)</p>
        </div>
        <div className='dollar-change'>
            <p className='new-dollar'>$32.00</p>
            <p className='old-dollar'>$42.00</p>
        </div>
        <h1 className='product-color '>Color</h1>
        <p className='detail-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br/> porttitor purus, et volutpat sit.</p>
        <div className='add-card'>
            <h1 className='add-heading'>Add To cart</h1>
            <img className='heart-icon' src={hearticon} alt="heart-icon"/>
        </div>
        <h1 className='category-tag-share '>Categories:</h1>
        <h1 style={{paddingTop: "10px"}} className='category-tag-share'>Tags</h1>
        <div className='share-media'>
            <h1 style={{paddingTop: "10px"}}className='category-tag-share'>Share</h1>
            <div className='media-icons'>
                <img  className='media-image' src={productfacebook} alt="facebook"/>
                <img className='media-image' src={productinstagram} alt="instagram"/>
                <img className='media-image' src={producttwitter} alt="twitter"/>
            </div>
        </div>
    </div>
</div>
</>
    );
};