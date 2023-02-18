import './LeatestBlog.scss';
import penicon from '../LeatestBlog/Vector.png';
import calendaricon from '../LeatestBlog/Vector (1).png';
import room1 from '../LeatestBlog/JIUjvqe2ZHg.png';
import room2 from '../LeatestBlog/2dcYhvbHV-M.png';
import room3 from '../LeatestBlog/2dcYhvbHV-M (1).png';
import { BlogComponents } from '../BlogComponents/BlogComponents';

export const LeatestBlog=()=>{
   const rooms = [
      {
        id: 1,
        roomSrc: room1,
        penIcon: penicon,
        roomText: 'SaberAli',
        calendarIcon:calendaricon,
        date:'21 August,2020',
        essentialTrends:'Top esssential Trends in 2021',
        roomParagraph:'More off this less hello samlande lied much \n over tightly circa horse taped mightly',
        readMore:'Read more',
      },
      {
        id: 2,
        roomSrc: room2,
        penIcon: penicon,
        roomText: 'Surfauxion',
        calendarIcon:calendaricon,
        date:'21 August,2020',
        essentialTrends:'Top esssential Trends in 2021',
        roomParagraph:'More off this less hello samlande lied much \n over tightly circa horse taped mightly',
        readMore:'Read more',
      },
      {
        id: 3,
        roomSrc: room3,
        penIcon: penicon,
        roomText: 'SaberAli',
        calendarIcon:calendaricon,
        date:'21 August,2020',
        essentialTrends:'Top esssential Trends in 2021',
        roomParagraph:'More off this less hello samlande lied much \n over tightly circa horse taped mightly',
        readMore:'Read more',
      },
  ];
    return(
        <>
        <div className="leatest-blog">
    <h1 className="leatest-heading">Leatest Blog</h1>
    <div className="room-choices">
    {rooms.map((room, index) => (
          <BlogComponents key={index} roomSrc={room.roomSrc}  penIcon={room.penIcon} roomText={room.roomText} 
          calendarIcon={room.calendarIcon}  date={room.date} essentialTrends={room.essentialTrends}
          roomParagraph={room.roomParagraph}  readMore={room.readMore} />
        ))}
    </div>
 </div>
        </>
    )
}