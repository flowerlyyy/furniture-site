import './TrendingComponents.scss';
interface ITrendProps {
    productChair: string;
    cantileverChair: string;
    oldValue: string;
    newValue:string;
  }
export const TrendingComponents = (props: ITrendProps) => {
    const { productChair ,cantileverChair, oldValue ,newValue} = props;
    return (
       <>
      <div className='product-chair'>
            <img src={productChair} alt="chairs"/>
            <h1 className='cantilever-heading'>{cantileverChair}</h1>
            <div className='number-value'>
                <span className='chair26'>{oldValue} </span>
                <span className='chair42'>{newValue}</span>
            </div>
        </div>
</>
    );
};