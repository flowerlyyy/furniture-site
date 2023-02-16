import './ProductComponent.scss';
interface IProductProps {
    productSrc: string;
    productHead: string;
    newChange: string;
    oldChange: string;
  }
  
  export const ProductComponent = (props: IProductProps) => {
    const { productSrc, productHead, newChange, oldChange } = props;
    return (
        <div className='product-part'>
        <img className='shop-product' src={productSrc} alt="product1"/>
        <h1 className='product-head'> {productHead}</h1>
        <div className='circle-button'>
     <button style={{backgroundColor: "#DE9034"}} className='product-color'></button>
     <button style={{backgroundColor: "#EC42A2"}} className='product-color'></button>
     <button style={{backgroundColor: "#8568FF"}} className='product-color'></button>
        </div>
     <div className='value-change'>
     <p className='new-change'> {newChange} </p>
     <p className='old-change'> {oldChange}</p>
 </div>
     </div>
    );
  };