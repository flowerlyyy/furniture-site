import './BlogComponents.scss';
interface IBlogProps {
    roomSrc: string;
    penIcon: string;
    roomText: string;
    calendarIcon:string;
    date:string;
    essentialTrends:string;
    roomParagraph:string;
    readMore:string;
  }
export const BlogComponents = (props: IBlogProps) => {
    const { roomSrc ,penIcon, roomText ,calendarIcon,date ,essentialTrends,roomParagraph,readMore } = props;
    return (
       <>
       <div className="room-type">
           <img src={roomSrc} alt="room"/>
           <div className="symbol-fact">
            <div className="room-name">
               <img className="vector-icon" src={penIcon} alt="penicon"/>
               <p className="room-text">{roomText}</p> 
            </div>
            <div className="room-date">
               <img className="calendar-icon" src={calendarIcon} alt="calendaricon"/>
            <p className="room-text">{date}</p>
            </div>
           </div>
           <h1 className="essential-trends">{essentialTrends}</h1>
           <p className="room-paragraph" >{roomParagraph}</p> 
           <a className="read-more" href="#">{readMore}</a>
        </div>
</>
    );
};
