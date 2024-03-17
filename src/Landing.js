const Landing = () => {
    function myFunction() {
        var x = document.getElementById("myLinks");
        if ( x !== null && x.style.display === "block") {
          x.style.display = "none";
        }
         else {
          if(x !== null){
            x.style.display = "block";
          }
        }
      }
    return (
            
            <div className="App">
          {/* // <!-- Load an icon library to show a hamburger menu (bars) on small screens --> */}

{/* <!-- Top Navigation Menu --> */}
<div className="topnav">
    {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
    </a>
  <a href="/" className="active">Home</a>
  {/* <!-- Navigation links (hidden by default) --> */}
  <div id="myLinks">
    <a href="aboutus">About Us</a>
    <a href="projectpartners">Project Partners</a>
    <a href="testimonials">Testimonials</a>
    <a href="login">Login</a>
  </div>
             </div>
             <h1> Starlight Studios</h1>
             <h1> 3D Animations and  Ad Company</h1>
             <h1> Over 35 years of experience</h1>
             <h1> 500+ Satified customers </h1>
             </div>
    )
}
export default Landing;