import './ListComponents.scss';
import circleicon from '../ListComponents/Group 35.png';
interface IThingProps {
    roomSrc: string;
    roomHeading: string;
    newNumber: string;
    oldNumber: string;
    roomParagraph: string;
  }
  
  export const ListComponents = (props: IThingProps) => {
    const { roomSrc ,roomHeading, newNumber, oldNumber, roomParagraph } = props;
    return (
       <>
       <div className='shop-box-frame'>
        <div className='shop-box'>
            <img className='room-image' src={roomSrc} alt="furniture"/>
            <div className='room-comment'>
                <div className='heading-button'>
                    <h1 className='room-heading'>{roomHeading}</h1>
                    <div className='circle-button'>
     <button style={{backgroundColor: "#DE9034"}} className='product-color'></button>
     <button style={{backgroundColor: "#EC42A2"}} className='product-color'></button>
     <button style={{backgroundColor: "#8568FF"}} className='product-color'></button>
        </div>
                </div>
                <div className='value-rating'>
                    <p className='new-number'>{newNumber}</p>
                    <p className='old-number'>{oldNumber}</p>
                </div>
                <p className='room-paragraph'>{roomParagraph}</p>
                <img className='circle-icon' src={circleicon} alt="circle-icon"/>
            </div>
        </div>

       </div>

        
    
</>
    );
};