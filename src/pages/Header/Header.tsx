import './Header.scss';
import gmailicon from '../Header/Vector (2).png' ;
import phoneicon from '../Header/Vector (3).png' ;
import profileicon from '../Header/carbon_user.png' ;
import hearticon from '../Header/Vector (4).png' ;
import shoppingicon from '../Header/fluent_cart-24-regular.png' ;
import hektoicon from '../Header/Hekto.svg' ;
import { NavBar } from '../../components/NavBar/NavBar';

export const Header =()=>{
    return(
<>
<div className="header">
    <div className="header-up">
        <div className="header-one">
            <div className="header-first-part">
<div className="gmail-part">
    <img className="gmail-icon" src={gmailicon} alt="gmailicon" />
    <p className="header-text-style">mhhasanul@gmail.com</p>
</div>
<div className="phone-part">
    <img className="phone-icon"src={phoneicon} alt="phoneicon" />
    <p className="header-text-style">(12345)67890</p>
</div>
            </div>
            <div className="header-second-part">
<select className="header-text-style language-option">
    <option>English</option>
    <option>Russian</option>
    <option>Azerbaijan</option>
</select>
<select className="header-text-style value-option">
    <option>USD</option>
    <option>TL</option>
    <option>MAN</option>
</select>
<div className="login-part">
    <p className="header-text-style">Login</p>
    <img className="profile-icon" src={profileicon} alt="profileicon" />
</div>
<div className="wish-list">
    <p className="header-text-style">wishlist</p>
    <img className="heart-icon" src={hearticon} alt="hearticon"/>
</div>
<img className="shopping" src={shoppingicon} alt="shoppingicon"/>
            </div>
        </div>
    </div>
    <div className="header-down">
        <div className="header-two">
        <img className="hekto-icon" src={hektoicon} alt="hektoicon"/>
        <NavBar/>
        <form>
            <input type='text'/>
        </form>
    </div>
</div>
</div>
</>
    );
};