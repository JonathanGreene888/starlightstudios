import './App.css';
import Grid from './Grid';
import axios from 'axios';
import data from './data.json';
import { useEffect, useState } from 'react';


  
 function CustomerProfile() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    grabProfile();
  },[])

function grabProfile() {
  axios.get("http://127.0.0.1:8000/").then(function (response){
    // console.log(response.data);
    setProfile(response.data);

  });
  }
  return (

    <div className="App">
          {/* // <!-- Load an icon library to show a hamburger menu (bars) on small screens --> */}

{/* <!-- Top Navigation Menu --> */}
<div className="topnav">
  <a href="/" className="active">logout</a>
</div>
      <header className="App-header">
          Welcome
          <br/> 
          {/* {profile[0].name} */}
      </header>
      <h1> Here are your Projects</h1>
      {profile !== undefined ? profile[0].name : "its missing"}
        <Grid data={data}/>
    </div>
  );
}

export default CustomerProfile;