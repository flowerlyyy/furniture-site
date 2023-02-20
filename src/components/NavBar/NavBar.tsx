import './NavBar.scss';
export const NavBar=()=>{
    return(
<>
<div className="navbar">
                {/* <select className="navbar-text navbar-option">
              <option>Home </option> 
              <option>Shop List</option>
              <option>Shop Grid Default</option>
              <option>Shop List</option>
              <option>Shop Left Sidebar</option>
              <option>Product Details</option>
              <option>Order Completed</option>
              <option>My Account</option>
              <option>Blog Page</option>
              <option>Single Blog</option>
              <option>About us</option>
              <option>Contact us</option>
              <option>FAQ</option>
                </select> */}
            <a className="navbar-text" href="/">Home</a> 
            <a className="navbar-text" href="#">Pages</a>
            <a className="navbar-text" href="/grid-default">Products</a>
            <a className="navbar-text" href="#">Blog</a>
            <a className="navbar-text" href="/shop-list">Shop</a>
            <a className="navbar-text" href="/contact-us">Contact</a>
        </div>
</>
    );
};