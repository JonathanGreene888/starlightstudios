
import { useLocation } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Cell from './Cell';

const EmployeeProjectPage = () => {
    let { state } = useLocation();
    let [milesstones, setMilestones] = useState(state.data.milestones);

return (
    <div className="App">
    <div>   
        {/* <!-- Top Navigation Menu --> */}
<div className="topnav">
<a href="/" className="active">logout</a>
   </div>
   </div>
   <header className="App-header">
   {state.data.Title}
      </header>
      <h1> Project {state.data.Title}</h1>
      <div className="Project-page-design-partner">
      <h3> Project Partner : {state.data.Projectpartner}
      </h3> 
      <h4> Designer e-mail {state.data.Designername.replace(/ /g, '.')}@gmail.com 555-555-5555</h4>
      </div>
      <div className="Project-page-design-partner">
      <h3> Status : {state.data.Status}
      </h3> 
      <h4> Hours worked {state.data.Hourscompleted} / Hours paid {state.data.Hoursremaining}</h4>
      <button disabled> Clock In</button> <button disabled> Clock Out</button>
      </div>
      <h1> Milestones: </h1> 
      <>
        {
             milesstones.map((e) => {
                return (
                    <div className='Row'>  <Cell content={e.title}/> <Cell content={e.status}/>  <input checked={e.status === "Completed" ? true : false} type="checkbox" id="status" name="status" /> </div>
                )
            })
        }
        </>
      <button onClick={() =>(setMilestones([...milesstones,{title: "new milestone", status:"In Progress"}]))}> Add Milestone </button>
   </div>
)
}
export default EmployeeProjectPage;