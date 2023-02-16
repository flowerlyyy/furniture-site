import './FeaturedProducts.scss';
import chair1 from '../FeaturedProducts/image 1168.png';
import chair2 from '../FeaturedProducts/image 1.png';
import chair3 from '../FeaturedProducts/image 1169.png';
import chair4 from '../FeaturedProducts/image 3.png';

export const FeaturedProducts=()=>{
    return(
<>
<div className="featured-products">
    <h1 className="featured-heading">Featured Products</h1>
    <div className="cantilever-chairs">
        <div className="featured-chair">
            <img src={chair1} alt="first-chair"/>
            <p className="chair-text">Cantilever chair</p>
            <p className="chair-code">Code - Y523201</p>
            <p className="chair-dolar">$42.00</p>
        </div>
        <div className="featured-chair">
            <img src={chair2} alt="second-chair"/>
            <p className="chair-text">Cantilever chair</p>
            <p className="chair-code">Code - Y523201</p>
            <p className="chair-dolar">$42.00</p>
        </div>
        <div className="featured-chair">
            <img src={chair3} alt="third-chair"/>
            <p className="chair-text">Cantilever chair</p>
            <p className="chair-code">Code - Y523201</p>
            <p className="chair-dolar">$42.00</p>
        </div>
        <div className="featured-chair">
            <img src={chair4} alt="forth-chair"/>
            <p className="chair-text">Cantilever chair</p>
            <p className="chair-code">Code - Y523201</p>
            <p className="chair-dolar">$42.00</p>
        </div>
    </div>
</div>
</>
    );
};