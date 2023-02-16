import './LeatestBlog.scss';
import penicon from '../LeatestBlog/Vector.png';
import calendaricon from '../LeatestBlog/Vector (1).png';
import room1 from '../LeatestBlog/JIUjvqe2ZHg.png';
import room2 from '../LeatestBlog/2dcYhvbHV-M.png';
import room3 from '../LeatestBlog/2dcYhvbHV-M (1).png';

export const LeatestBlog=()=>{
    return(
        <>
        <div className="leatest-blog">
    <h1 className="leatest-heading">Leatest Blog</h1>
    <div className="room-choices">
        <div className="room-type">
           <img src={room1} alt="room"/>
           <div className="symbol-fact">
            <div className="room-name">
               <img className="vector-icon" src={penicon} alt="penicon"/>
               <p className="room-text">SaberAli</p> 
            </div>
            <div className="room-date">
               <img className="calendar-icon" src={calendaricon} alt="calendaricon"/>
            <p className="room-text">21 August,2020</p>
            </div>
           </div>
           <h1 className="essential-trends">Top esssential Trends in 2021</h1>
           <p className="room-paragraph" >More off this less hello samlande lied much <br/> over tightly circa horse taped mightly</p> 
           <a className="read-more" href="#">Read more</a>
        </div>
        <div className="room-type">
            <img src={room2} alt="room"/>
            <div className="symbol-fact">
             <div className="room-name">
                <img className="vector-icon" src={penicon} alt="penicon"/>
                <p className="room-text">Surfauxion</p> 
             </div>
             <div className="room-date">
                <img className="calendar-icon" src={calendaricon} alt="calendaricon"/>
             <p className="room-text">21 August,2020</p>
             </div>
            </div>
            <h1 className="essential-trends">Top esssential Trends in 2021</h1>
            <p className="room-paragraph" >More off this less hello samlande lied much <br/> over tightly circa horse taped mightly</p> 
            <a className="read-more" href="#">Read more</a>
         </div>
         <div className="room-type">
            <img src={room3} alt="room" />
            <div className="symbol-fact">
             <div className="room-name">
                <img className="vector-icon" src={penicon} alt="penicon"/>
                <p className="room-text">SaberAli</p> 
             </div>
             <div className="room-date">
                <img className="calendar-icon" src={calendaricon} alt="calendaricon"/>
             <p className="room-text">21 August,2020</p>
             </div>
            </div>
            <h1 className="essential-trends">Top esssential Trends in 2021</h1>
            <p className="room-paragraph" >More off this less hello samlande lied much <br/> over tightly circa horse taped mightly</p> 
            <a className="read-more" href="#">Read more</a>
         </div>
    </div>
 </div>
        </>
    )
}