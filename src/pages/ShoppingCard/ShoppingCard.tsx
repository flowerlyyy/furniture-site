import { ProductPrice } from './components/ProductPrice/ProductPrice';
import { ShoppingCardHeading } from './components/ShoppingCardHeading/ShoppingCardHeading';
import './ShoppingCard.scss';
export const ShoppingCard=()=>{
    return(
<>
<ShoppingCardHeading/>
<ProductPrice/>
</>
    );
};