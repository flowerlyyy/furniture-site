import './ContactComponents.scss';
interface IContactProps {
    circleColor:string;
    contactTel:string;
    contactGmail: string;
  }
  export const ContactComponents = (props: IContactProps) => {
    const { circleColor ,contactTel, contactGmail } = props;
    return (
        <div className='contact-part'>
            <img src={circleColor} className='colored-circle'/>
            <div className='phone-gmail'>
                <p className='contact-address'>{contactTel}</p>
                <p className='contact-address'>{contactGmail}</p>
            </div>
        </div>
       );
       };