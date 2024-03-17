import './Row.css';
import Cell from './Cell';
import LinkCell from './LinkCell';

const Row = (props) => {
    return (
        <>
        {
            props.data.profiles.map((e) => {
                return (
                    <div className='Row'> <LinkCell redirect={`customerproject/${e.profile.id}`} content={e.profile.Title} data={e.profile} milestones={e.profile.Milestones}/> <Cell content={e.profile.Status}/> <Cell content={e.profile.Designername}/>  <Cell content={`${e.profile.milestones.filter((m)=>m.status === "Completed").length}/${e.profile.milestones.length}`}/>  <Cell content={`${e.profile.Hourscompleted}/${e.profile.Hoursremaining}`}/> </div>
                )
            })
        }
        </>
    )
} 
export default Row;