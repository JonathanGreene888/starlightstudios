import './Grid.css';
import Cell from './Cell';
import EmployeeRow from './EmployeeRow';

const EmployeeGrid = (props) => {
   return( 
   <div className="Container">
    <div className='Header-Row'> <Cell content="Project"/> <Cell content="Project Partners"/> <Cell content="Status"/> <Cell content="Designer"/> <Cell content="Milestone"/> <Cell content="Hours"/> </div>
    <EmployeeRow data={props.data}/>
    </div>
   )
};

export default EmployeeGrid;