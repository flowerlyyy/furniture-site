import './TopCategories.scss';
import lcwchair1 from '../TopCategories/fotor_2023-2-11_1_0_1.png';
import lcwchair2 from '../TopCategories/fotor_2023-2-11_0_53_38.png';
import lcwchair3 from '../TopCategories/fotor_2023-2-11_0_57_22.png';
import lcwchair4 from '../TopCategories/fotor_2023-2-11_0_58_18.png';

export const TopCategories=()=>{
    return(
<>
<div className="top-categories">
    <h1 className="top-heading">Top Categories</h1>
    <div className="chair-choices">
        <div className="chair-box">
                <img className="lcwchair" src={lcwchair1} alt="lcwchair"/>
                <p className="mini-chair">Mini LCW chair</p>
                <p className="value-dolar">$56.00</p>
        </div>
        <div className="chair-box">
            <img className="lcwchair" src={lcwchair2} alt="lcwchair"/>
            <p className="mini-chair">Mini LCW chair</p>
            <p className="value-dolar">$56.00</p>
    </div>
    <div className="chair-box">
        <img className="lcwchair" src={lcwchair3} alt="lcwchair"/>
        <p className="mini-chair">Mini LCW chair</p>
        <p className="value-dolar">$56.00</p>
</div>
<div className="chair-box">
    <img className="lcwchair" src={lcwchair4} alt="lcwchair"/>
    <p className="mini-chair">Mini LCW chair</p>
    <p className="value-dolar">$56.00</p>
</div>
    </div>
</div>
</>
    );
};