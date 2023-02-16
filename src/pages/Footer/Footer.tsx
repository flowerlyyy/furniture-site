import './Footer.scss';
import facebook from '../Footer/Group 202.png';
import instagram from '../Footer/Group 203.png';
import twitter from '../Footer/Group 204.png';
export const Footer=()=>{
    return(
<>

<div className="footer">
    <div className="footer-up">
    <div className="footer-one-common">
    <div className="footer-one">
        <h1 className="footer-first-heading">Hekto</h1>
        <div className="email-sign-up">
            <input className="email-adress" placeholder="Enter Email Address" type="text"/>
            <button className="footer-sign-up">Sign up</button>
        </div>
        <p className="contact-info">Contact Info</p>
        <p className="hekto-adress">17 Princess Road, London, Greater London NW1 8JR, UK</p>
    </div>
    <div className="footer-one">
        <h1 className="footer-categories">Catagories</h1>
      <a className="footer-link" href="#">Laptops & Computers</a><br/>
      <a className="footer-link" href="#">Cameras & Photography</a><br/>
      <a className="footer-link" href="#">Smart Phones & Tablets</a><br/>
      <a className="footer-link" href="#">Video Games & Consoles</a><br/>
      <a className="footer-link" href="#">Waterproof Headphones</a>
    </div>
    <div className="footer-one">
        <h1 className="footer-categories">Customer Care</h1>
      <a className="footer-link" href="#">My Account</a><br/>
      <a className="footer-link" href="#">Discount</a><br/>
      <a className="footer-link" href="#">Returns</a><br/>
      <a className="footer-link" href="#">Orders History</a><br/>
      <a className="footer-link" href="#">Order Tracking</a>
    </div>
    <div className="footer-one">
        <h1 className="footer-categories">Pages</h1>
      <a className="footer-link" href="#">Blog</a><br/>
      <a className="footer-link" href="#">Browse the Shop</a><br/>
      <a className="footer-link" href="#">Category</a><br/>
      <a className="footer-link" href="#">Pre-Built Pages</a><br/>
      <a className="footer-link" href="#">Visual Composer Elements</a>
      <a className="footer-link" href="#">WooCommerce Pages</a>
    </div>
</div>
 </div>
 <div className="footer-down">
    <div className="footer-two">
    <p className="all-rights">©Webecy - All Rights Reserved</p>
    <div className="media-logos">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram"/>
        <img src={twitter} alt="twitter"/>
    </div>
 </div>
 </div>
</div>
</>
    );
};