import { RelatedComponents } from '../RelatedComponents/RelatedComponents';
import detailedphoto from '../RelatedProduct/Rectangle 128.png';
import './RelatedProduct.scss';
export const RelatedProduct=()=>{
    const boxes = [
        {
          id: 1,
          productPhoto: detailedphoto,
  fashionWear: 'Mens Fashion Wear',
  productDollarValue: '$43.00',
        },
        {
          id: 2,
          productPhoto: detailedphoto,
  fashionWear: 'Women’s Fashion',
  productDollarValue: '$67.00',
        },
        {
          id: 3,
          productPhoto: detailedphoto,
  fashionWear: 'Wolx Dummy Fashion',
  productDollarValue: '$67.00',
        },
        {
          id:4,
          productPhoto: detailedphoto,
          fashionWear: 'Top Wall Digital Clock',
          productDollarValue:'$51.00',
        },
      ];
    return(
<>
<div className='related-products'>
    <h1 className='related-heading'>Related Products</h1>
    <div className='four-related-products'>
    {boxes.map((box, index) => (
          <RelatedComponents key={index} productPhoto={box.productPhoto} fashionWear={box.fashionWear} productDollarValue={box.productDollarValue}  />
        ))}
    </div>
</div>
</>
    );
};