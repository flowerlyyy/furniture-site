import './TopCategories.scss';
import lcwchair1 from '../TopCategories/fotor_2023-2-11_1_0_1.png';
import lcwchair2 from '../TopCategories/fotor_2023-2-11_0_53_38.png';
import lcwchair3 from '../TopCategories/fotor_2023-2-11_0_57_22.png';
import lcwchair4 from '../TopCategories/fotor_2023-2-11_0_58_18.png';
import { TopCatComponents } from '../TopCatComponents/TopCatComponents';

export const TopCategories=()=>{
    const tops = [
        {
          id: 1,
          lcwchair: lcwchair1,
    miniChair: 'Mini LCW chair',
        chairValue: '$56.00',
        },
        {
          id: 2,
          lcwchair: lcwchair2,
          miniChair: 'Mini LCW chair',
          chairValue: '$56.00',
        },
        {
          id: 3,
          lcwchair: lcwchair3,
          miniChair: 'Mini LCW chair',
          chairValue: '$56.00',
        },
        {
          id: 4,
          lcwchair: lcwchair4,
          miniChair: 'Mini LCW chair',
          chairValue: '$56.00',
        },
    ];
    return(
<>
<div className="top-categories">
    <h1 className="top-heading">Top Categories</h1>
    <div className="chair-choices">
    {tops.map((top, index) => (
          <TopCatComponents key={index} lcwchair={top.lcwchair}  miniChair={top.miniChair} chairValue={top.chairValue}  />
        ))}
    </div>
</div>
</>
    );
};