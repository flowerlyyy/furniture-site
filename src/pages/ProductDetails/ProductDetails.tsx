import { DescriptionDetails } from './components/DescriptionDetails/DescriptionDetails';
import { DetailHeading } from './components/DetailHeading/DetailHeading';
import { ProductDescription } from './components/ProductDescription/ProductDescription';
import { RelatedProduct } from './components/RelatedProduct/RelatedProduct';
import './ProductDetails.scss';
export const ProductDetails=()=>{
    return(
<>
<DetailHeading/>
<ProductDescription/>
<DescriptionDetails/>
<RelatedProduct/>
</>
    );
};