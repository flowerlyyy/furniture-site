import './ShopexComponents.scss';
interface IShopexProps {
    supportIcon: string;
    supportall: string;
    supportParagraph: string;
  }
export const ShopexComponents = (props: IShopexProps) => {
    const { supportIcon ,supportall, supportParagraph } = props;
    return (
       <>
       <div className="support">
        <img className="icon" src={supportIcon} alt="car"/>
        <h1 className="all-day">{supportall}</h1>
        <p className="support-paragraph">{supportParagraph}</p>
</div>
</>
    );
};