import { ProductList } from './components/ProductList/ProductList';
import { SidebarHeading } from './components/SidebarHeading/SidebarHeading';
import './ShopLeftSidebar.scss';
export const ShopLeftSidebar=()=>{
    return(
<>
<SidebarHeading/>
<ProductList/>
</>
    );
};