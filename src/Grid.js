import './Grid.css';
import Row from './Row';
import Cell from './Cell';

const Grid = (props) => {
   return( 
   <div className="Container">
    <div className='Header-Row'> <Cell content="Project"/> <Cell content="Status"/> <Cell content="Designer"/> <Cell content="Milestone"/> <Cell content="Hours"/> </div>
    <Row data={props.data}/>
    </div>
   )
};

export default Grid;