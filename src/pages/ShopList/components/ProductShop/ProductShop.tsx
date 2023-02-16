import './ProductShop.scss';
import room1 from '../ProductShop/Rectangle 32.png';
import room2 from '../ProductShop/Rectangle 32 (1).png';
import room3 from '../ProductShop/Rectangle 32 (2).png';
import room4 from '../ProductShop/Rectangle 32 (3).png';
import room5 from '../ProductShop/Rectangle 32 (4).png';
import room6 from '../ProductShop/Rectangle 32 (5).png';
import room7 from '../ProductShop/Rectangle 32 (6).png';
import { ShopComponent } from '../ShopComponent/ShopComponent';
export const ProductShop=()=>{
    const rooms = [
        {
          id: 1,
          roomSrc: room1,
    roomHeading: 'Accumsan tincidunt',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 2,
          roomSrc: room2,
    roomHeading: 'In nulla',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 3,
          roomSrc: room3,
          roomHeading: 'Vel sem',
          newNumber: '$26.00',
    oldNumber: '$52.00',
          roomParagraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 4,
          roomSrc: room4,
    roomHeading: 'Porttitor cum',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 5,
          roomSrc: room5,
    roomHeading: 'Nunc in',
    newNumber: '$26.00',
    oldNumber: '$52.00',
    roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
            id:6,
            roomSrc: room6,
            roomHeading: 'Vitae facilisis',
            newNumber: '$26.00',
            oldNumber: '$52.00',
            roomParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est \n adipiscing in phasellus non in justo.',
        },
        {
          id: 7,
          roomSrc: room7,
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
<div className='seven-products'>
{rooms.map((room, index) => (
          <ShopComponent key={index} roomSrc={room.roomSrc}  roomHeading={room.roomHeading} newNumber={room.newNumber} oldNumber={room.oldNumber} roomParagraph={room.roomParagraph} />
        ))}
</div>
</div>
    );
};