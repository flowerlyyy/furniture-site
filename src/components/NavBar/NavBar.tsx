import './NavBar.scss';
export const NavBar=()=>{
    return(
<>
<div className="navbar">
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