import './TrendingProducts.scss';
import trendchair1 from '../TrendingProducts/box for image.png';
import trendchair2 from '../TrendingProducts/box for image (1).png';
import trendchair3 from '../TrendingProducts/box for image (2).png';
import trendchair4 from '../TrendingProducts/box for image (3).png';
import clock from '../TrendingProducts/image 1162.png';
import table from '../TrendingProducts/image 1161.png';
import seatchair1 from '../TrendingProducts/image 30.png';
import seatchair2 from '../TrendingProducts/image 19.png';
import seatchair3 from '../TrendingProducts/image 28.png';

export const TrendingProducts=()=>{
    return(
<>
<div className='trending-products'>
    <h1 className='trend-heading'>Trending Products</h1>
    <div className='trending-chairs'>
        <div className='product-chair'>
            <img src={trendchair1} alt="chairs"/>
            <h1 className='cantilever-heading'>Cantilever chair</h1>
            <div className='number-value'>
                <span className='chair26'>$26.00 </span>
                <span className='chair42'>$42.00</span>
            </div>
        </div>
        <div className='product-chair'>
            <img src={trendchair2} alt="chairs"/>
            <h1 className='cantilever-heading'>Cantilever chair</h1>
            <div className='number-value'>
                <span className='chair26'>$26.00 </span>
                <span className='chair42'>$42.00</span>
            </div>
        </div>
        <div className='product-chair'>
            <img src={trendchair3} alt="chairs"/>
            <h1 className='cantilever-heading'>Cantilever chair</h1>
            <div className='number-value'>
                <span className='chair26'>$26.00 </span>
                <span className='chair42'>$42.00</span>
            </div>
        </div>
        <div className='product-chair'>
            <img src={trendchair4} alt="chairs"/>
            <h1 className='cantilever-heading'>Cantilever chair</h1>
            <div className='number-value'>
                <span className='chair26'>$26.00 </span>
                <span className='chair42'>$42.00</span>
            </div>
        </div>
    </div>
    <div className='three-trending'>
        <div className='black-yellow black-clock'>
            <h1 className='product-heading'>23% off in all products</h1>
            <div className='link-image'>
            <a className='product-link' href='#'>Shop Now</a>
            <img className='oclock-size' src={clock} alt="clock"/>
        </div>
        </div>
        <div className='black-yellow yellow-table'>
        <h1 className='product-heading'>23% off in all products</h1>
        <div className='link-table'>
            <a className='product-link' href='#'>View Collection</a>
            <img className='table-size' src={table} alt="table"/>
        </div>
        </div>
        <div className='product-column'>
            <div className='column-part'>
                <img src={seatchair1} alt="seatchair"></img>
                <div className='trend-blog'>
                <h1 className='executive-chair'>Executive Seat chair</h1>
                <p className='executive-value'>$32.00</p>
                </div>
            </div>
            <div className='column-part'>
                <img src={seatchair2} alt="seatchair"></img>
                <div className='trend-blog'>
                <h1 className='executive-chair'>Executive Seat chair</h1>
                <p className='executive-value'>$32.00</p>
                </div>
            </div>
            <div className='column-part'>
                <img src={seatchair3} alt="seatchair"></img>
                <div className='trend-blog'>
                <h1 className='executive-chair'>Executive Seat chair</h1>
                <p className='executive-value'>$32.00</p>
                </div>
            </div>
           
        </div>
    </div>
</div>
</>
    );
};