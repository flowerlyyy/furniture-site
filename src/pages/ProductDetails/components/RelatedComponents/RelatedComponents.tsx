import './RelatedComponents.scss';
interface IRelatedProps {
  productPhoto: string;
  fashionWear: string;
  productDollarValue: string;
}

export const RelatedComponents = (props: IRelatedProps) => {
  const { productPhoto, fashionWear, productDollarValue } = props;
  return (
    <div className='product-box-detail'>
        <img src={productPhoto} alt="productimage"/>
        <h1 className='fashion-wear'>{fashionWear}</h1>
        <p className='product-dollar-value'>{productDollarValue}</p>
            </div>
    );
};