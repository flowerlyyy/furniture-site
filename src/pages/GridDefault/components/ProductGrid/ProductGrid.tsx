import './ProductGrid.scss';
import { ProductComponent } from '../ProductComponent/ProductComponent';
import product1 from '../ProductGrid/Ecommerce accesories..png';
import product2 from '../ProductGrid/Ecommerce accesories (1)..png';
import product3 from '../ProductGrid/Ecommerce accesories (2)..png';
import product4 from '../ProductGrid/Ecommerce accesories (3)..png';
import product5 from '../ProductGrid/Ecommerce accesories (4)..png';
import product6 from '../ProductGrid/Ecommerce accesories (5)..png';
import product7 from '../ProductGrid/Ecommerce accesories (6)..png';
import product8 from '../ProductGrid/Ecommerce accesories (7)..png';
import product9 from '../ProductGrid/Ecommerce accesories (8)..png';
import product10 from '../ProductGrid/Ecommerce accesories (9)..png';
import product11 from '../ProductGrid/Ecommerce accesories (10)..png';
import product12 from '../ProductGrid/Ecommerce accesories (11)..png';


export const ProductGrid= () => {
    const products = [
      {
        id: 1,
        productSrc: product1,
    productHead: 'Vel elit euismod',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 2,
        productSrc: product2,
    productHead: 'Ultricies condimentum imperdiet',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 3,
        productSrc: product3,
    productHead: 'Vitae suspendisse sed',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 4,
        productSrc: product4,
    productHead: 'Sed at fermentum',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 5,
        productSrc: product5,
    productHead: 'Fusce pellentesque at',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 6,
        productSrc: product6,
    productHead: 'Vestibulum magna laoreet',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 7,
        productSrc: product7,
    productHead: 'Sollicitudin amet orci',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 8,
        productSrc: product8,
    productHead: 'Ultrices mauris sit',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 9,
        productSrc: product9,
    productHead: 'Pellentesque condimentum ac',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 10,
        productSrc: product10,
    productHead: 'Cras scelerisque velit',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 11,
        productSrc: product11,
    productHead: 'Lectus vulputate faucibus',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
      {
        id: 12,
        productSrc: product12,
    productHead: 'Purus risus, ut',
    newChange: '$26.00' ,
    oldChange: '$42.00',
      },
    ];
    return(
<>
<div className='accesories-grid'>
<div className='shop-accesories'>
            <div className='fashion-item'>
                <h1 className='fashion-heading'>Ecommerce Acceories & Fashion item </h1>
                <h1 className='fashion-results'>About 9,620 results (0.62 seconds)</h1>
            </div>
            <div className='page-sort'>
                <div className='per-page'>
                    <h1 className='page-sort-heading'>Per Page:</h1>
                    <input className='per-page-input' type="text"/>
                </div>
                <div className='sort-by'>
                    <h1 className='page-sort-heading'>Sort By:</h1>
                    <select className='sort-by-option'>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className='view'>
                    <h1 className='page-sort-heading'>View:</h1>
                    <input className='view-input' type="text"/>
                </div>
            </div>
    </div>
<div className='sixteen-products'>
{products.map((product, index) => (
          <ProductComponent key={index} productSrc={product.productSrc}  productHead={product.productHead} newChange={product.newChange} oldChange={product.oldChange} />
        ))}
</div>
</div>
</>
    )
};