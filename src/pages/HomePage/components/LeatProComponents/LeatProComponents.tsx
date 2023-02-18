import './LeatProComponents.scss';
interface ILeatProductProps {
    sofaChair: string;
    sofaCraft: string;
    sofaNewValue: string;
    sofaOldValue: string;
  }
export const LeatProComponents = (props: ILeatProductProps) => {
    const { sofaChair ,sofaCraft, sofaNewValue, sofaOldValue } = props;
    return (
       <>
       <div className="sofa-characteristics">
            <img src={sofaChair} alt="frame"/>
            <div className="sofa-text">
            <span className="handy-craft">{sofaCraft}</span>
            <span className="new-value">{sofaNewValue}</span>
            <span className="old-value">{sofaOldValue}</span>
            </div>
        </div>
</>
    );
};