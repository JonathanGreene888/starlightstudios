import EmployeeGrid from "./EmployeeGrid";
import data from './data.json';
import './App.css';
import { useState } from 'react';

const EmployeeProfile = () => {
  let [profiles, setProfiles] = useState(data);
    return (

        <div className="App">
              {/* // <!-- Load an icon library to show a hamburger menu (bars) on small screens --> */}
    
    {/* <!-- Top Navigation Menu --> */}
    <div className="topnav">
      <a href="/" className="active">logout</a>
    </div>
          <header className="App-header">
              Welcome Back
              <br/> 
              Jason!
          </header>
          <h1> Here are your Projects</h1>
            <EmployeeGrid data={profiles}/>
            <button disabled onClick={() =>(setProfiles([...profiles, {
              profile:
              {
                  Title: "new Project",
                  id: "3",
                  Name: "Jim Rohn",
                  Projectpartner: "Jason",
                  Designername: "Mars Brunooo",
                  Designerimage: "https://iscale.iheart.com/catalog/artist/337578",
                  Status: "In Progress",
                  Hourscompleted: "100",
                  Hoursremaining: "20",
                  milestones: [
                      {
                          title: "Find Artist",
                          status: "In Progress"
                      },
                      {
                          title: "Add in Sound",
                          status: "Completed"
                      },
                      {
                          title: "Add in Animation",
                          status: "Incomplete"
                      }
                    ]
                  }
                  }]))}>
                Add Project
            </button>
        </div>
      );
}
export default EmployeeProfile;