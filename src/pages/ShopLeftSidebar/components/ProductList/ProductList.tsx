import './ProductList.scss';
import firstthing from '../ProductList/Rectangle 32 (7).png';
import secondthing from '../ProductList/Rectangle 32 (8).png';
import thirdthing from '../ProductList/Rectangle 32 (9).png';
import forththing from '../ProductList/Rectangle 32 (10).png';
import fifththing from '../ProductList/Rectangle 32 (11).png';
import sixththing from '../ProductList/Rectangle 32 (12).png';
import sevenththing from '../ProductList/Rectangle 32 (13).png';
import { ListComponents } from '../ListComponents/ListComponents';
export const ProductList=()=>{
    const rooms = [
        {
          id: 1,
          roomSrc: firstthing,
    roomHeading: 'Accumsan tincidunt',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 2,
          roomSrc: secondthing,
    roomHeading: 'In nulla',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 3,
          roomSrc: thirdthing,
          roomHeading: 'Vel sem',
          newNumber: '$26.00',
    oldNumber: '$52.00',
          roomParagraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 4,
          roomSrc: forththing,
    roomHeading: 'Porttitor cum',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 5,
          roomSrc: fifththing,
    roomHeading: 'Nunc in',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
            id:6,
            roomSrc: sixththing,
            roomHeading: 'Vitae facilisis',
            newNumber: '$26.00',
            oldNumber: '$52.00',
            roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 7,
          roomSrc: sevenththing,
          roomHeading: 'Curabitur lectus',
          newNumber: '$26.00',
    oldNumber: '$52.00',
          roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
    ];
    return(
       
<div className='accesories-room'>
<div className='shop-accesories'>
            <div className='fashion-item'>
                <h1 className='fashion-heading'>Ecommerce Acceories & Fashion item </h1>
                <h1 className='fashion-results'>About 9,620 results (0.62 seconds)</h1>
            </div>
            <div className='page-sort'>
                <div className='per-page'>
                    <h1 className='page-sort-heading'>Per Page:</h1>
                    <input className='per-page-input' type="text"/>
                </div>
                <div className='sort-by'>
                    <h1 className='page-sort-heading'>Sort By:</h1>
                    <select className='sort-by-option'>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className='view'>
                    <h1 className='page-sort-heading'>View:</h1>
                    <input className='view-input' type="text"/>
                </div>
            </div>
    </div>
    <div className='left-sidebar'>
            <div className='features-column'>
                <div className='product-brand'>
                    <h1 className='brand-heading'>Product Brand</h1>
                    <p className='product-paragraph' >Coaster Furniture</p>
                    <p className='product-paragraph'>Fusion Dot High Fashion</p>
                    <p className='product-paragraph'>Unique Furnitture Restor</p>
                    <p className='product-paragraph'>Dream Furnitture Flipping</p>
                    <p className='product-paragraph'>Young Repurposed</p>
                    <p className='product-paragraph'>Young Repurposed</p>
                </div>
                <div style={{paddingTop: "44px"}} className='product-brand'>
                    <h1 className='brand-heading'>Discount Offer</h1>
                    <p className='product-paragraph' >20% Cashback</p>  
                    <p className='product-paragraph'>5% Cashback Offer</p>
                    <p className='product-paragraph'>25% Discount Offer</p>
                </div>
                <div style={{paddingTop: "43px"}} className='product-brand'>
                    <h1 className='brand-heading'>Rating Item</h1>
                    <p className='product-paragraph' >20% Cashback</p>  
                    <p className='product-paragraph'>5% Cashback Offer</p>
                    <p className='product-paragraph'>25% Discount Offer</p>
                    <p className='product-paragraph'>25% Discount Offer</p>
                </div>
                <div style={{paddingTop: "44px"}} className='product-brand'>
                    <h1 className='brand-heading'>Categories</h1>
                    <p className='product-paragraph' >Prestashop</p>
                    <p className='product-paragraph'>Magento</p>
                    <p className='product-paragraph'>Bigcommerce</p>
                    <p className='product-paragraph'>osCommerce</p>
                    <p className='product-paragraph'>3dcart</p>
                    <p className='product-paragraph'>Bags</p>
                    <p className='product-paragraph'>Accessories</p>
                    <p className='product-paragraph'>Jewellery</p>
                    <p className='product-paragraph'>Watches</p>
                </div>
                <div style={{paddingTop: "44px"}} className='product-brand'>
                    <h1 className='brand-heading'>Price Filter</h1>
                    <p className='product-paragraph2' >$0.00 - $150.00</p>  
                    <p className='product-paragraph2'>$150.00 - $350.00</p>
                    <p className='product-paragraph2'>$150.00 - $504.00</p>
                    <p className='product-paragraph2'>$450.00 +</p>
                    <input className='input-search' type="text"></input>
                </div>
                <div style={{paddingTop: "51px"}} className='product-brand'>
                    <h1 className='brand-heading'>Filter By Color</h1>
                    <div className='circle-combine'>
                    <div className='circle-name'>
                        <div style={{backgroundColor: "#5E37FF"}} className='circle-color'></div>
                        <p className='product-paragraph2'>Blue</p>   </div>
                    <div className='circle-name'>
                        <div style={{backgroundColor: "#FF9437"}} className='circle-color'></div>
                        <p className='product-paragraph2'>Orange</p>  </div>
                    <div className='circle-name'>
                        <div style={{backgroundColor: "#FFBF95"}} className='circle-color'></div>
                        <p className='product-paragraph2'>Brown</p>  </div>
                    <div className='circle-name'>
                        <div style={{backgroundColor: "#FFBF95"}} className='circle-color'></div>
                        <p className='product-paragraph2'>Green</p>  </div>
                    <div className='circle-name'>
                        <div style={{backgroundColor: "#E248FF"}} className='circle-color'></div>
                        <p className='product-paragraph2'>Purple</p>  </div>
                    <div className='circle-name'>
                        <div style={{backgroundColor: "#26CBFF"}} className='circle-color'></div>
                        <p className='product-paragraph2'>Sky</p>  </div>
                </div>
                </div>
            </div>
<div className='seven-products'>
{rooms.map((room, index) => (
          <ListComponents key={index} roomSrc={room.roomSrc}  roomHeading={room.roomHeading} newNumber={room.newNumber} oldNumber={room.oldNumber} roomParagraph={room.roomParagraph} />
        ))}
</div>
</div>
</div>
    );
};