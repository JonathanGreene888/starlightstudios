
import { useLocation } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Cell from './Cell';


const CustomerProjectPage = () => {
  let { state } = useLocation();
  let [hours, setHours] = useState(state.data.Hoursremaining);
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
      <h1> Project  {state.data.Title}</h1>
      <div className="Project-page-design-partner">
      <h3> Design Partner :  
        <img atl="designer" src={state.data.Designerimage} width='56' height='56'/>
      </h3> 
      <h4> {state.data.Designername} </h4>
      <h4>Rate 45/hr</h4>
      <h4> {state.data.Designername.replace(/ /g, '.')}@gmail.com 555-555-5555</h4>
      </div>
      <div className="Project-page-design-partner">
      <h3> Status : {state.data.Status}
      </h3> 
      <h4> Hours worked {state.data.Hourscompleted} / Hours remaining {hours}</h4>
      </div>
      <h1> Milestones: </h1> 
        <>
        {
             state.data.milestones.map((e) => {
                return (
                    <div className='Row'>  <Cell content={e.title}/> <Cell content={e.status}/>  <input checked={e.status === "Completed" ? true : false} type="checkbox" id="status" name="status" /> </div>
                )
            })
        }
        </>
      <button onClick={() =>(setHours(Number(hours) + 10))}> Add 10 Hours to Remaining </button>
   </div>
)
}
export default CustomerProjectPage;