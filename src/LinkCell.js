import './Cell.css';
import { Link } from 'react-router-dom';
const LinkCell = (props) => {
    return <div className='Cell'> <Link to={props.redirect} state={{data: props.data, milesstones: props.data.milesstones}}> {props.content} </Link> </div>
}
export default LinkCell;