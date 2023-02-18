import './FeaturesComponents.scss';
interface IFeaturesProps {
   supportIcon:string;
    supportHeading:string;
    supportParagraph: string;
  }
  export const FeaturesComponents = (props: IFeaturesProps) => {
    const { supportIcon ,supportHeading, supportParagraph } = props;
    return (
        <div className="support">
        <img className="icon" src={supportIcon} alt="car"/>
        <h1 className="all-day">{supportHeading}</h1>
        <p className="support-paragraph">{supportParagraph}</p>
</div>
       );
       };