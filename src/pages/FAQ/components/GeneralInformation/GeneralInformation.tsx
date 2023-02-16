import './GeneralInformation.scss';
export const GeneralInformation=()=>{
    return(
<>
<div className='information-questions'>
    <div className='general-information'>
        <h1 className='information-heading'>Generel Information</h1>
        <p className='faq-question'>Eu dictumst cum at sed euismood condimentum?</p>
        <p className='faq-answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/>tristique mollis vitae, consequat gravida sagittis.</p>
        <p className='faq-question'>Magna bibendum est fermentum eros?</p>
        <p className='faq-answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/>tristique mollis vitae, consequat gravida sagittis.</p>
        <p className='faq-question'>Odio muskana hak eris conseekin sceleton?</p>
        <p className='faq-answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/> tristique mollis vitae, consequat gravida sagittis.</p>
        <p className='faq-question'>Elit id blandit sabara boi velit gua mara?</p>
        <p className='faq-answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/> tristique mollis vitae, consequat gravida sagittis.</p>
    </div>
    <div className='askquestion-frame'>
        <div className='askquestion'>
        <h1 className='ask-question-heading'>Ask a Question</h1>
        <input className='input-name' type="text" placeholder='Your Name*'/>
        <input className='input-subject' type="text" placeholder='Subject*'/>
        <input className='input-message' type="text" placeholder='Type Your Message*'/>
        <button className='send-mail'>Send Mail</button>
    </div>
</div>
</div>
</>
    );
};