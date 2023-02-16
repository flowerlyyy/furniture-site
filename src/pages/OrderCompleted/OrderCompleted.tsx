import './OrderCompleted.scss';
import { CompleteTask } from './components/CompleteTask/CompleteTask';
import { OrderHeading } from './components/OrderHeading/OrderHeading';
export const OrderCompleted=()=>{
    return(
<>
<OrderHeading/>
<CompleteTask/>
</>
    );
};