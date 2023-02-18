import './TopCatComponents.scss';
interface ITopProps {
    lcwchair: string;
    miniChair: string;
    chairValue: string;
  }
export const TopCatComponents = (props: ITopProps) => {
    const {lcwchair,miniChair, chairValue } = props;
    return (
       <>
       <div className="chair-box">
                <img className="lcwchair" src={lcwchair} alt="lcwchair"/>
                <p className="mini-chair">{miniChair}</p>
                <p className="value-dolar">{chairValue}</p>
        </div>
</>
    );
};
