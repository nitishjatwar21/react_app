import React,{Component} from 'react';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 
import { Button, Form ,FormGroup ,Label, Input,Nav } from 'reactstrap';
import { FacebookLoginButton} from 'react-social-login-buttons';
import Eventlist from './event/event';
import Show from './show/show'
import Del from './delete/delete'
import Create from './create/create'
import Sidebar from './side'
import Edit from './edit/edit'
import ToggleButton from 'react-bootstrap/ToggleButton'


const User = (params) => {
  return (<h1>Welcome {params.username} </h1>)
}

// const dash= () => {
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li><NavLink to="/Peter"  activeStyle={
//               {color:'green' }
//             }>Peter</NavLink></li>
//             <li><NavLink to="/Nitish"  activeStyle={
//               {color:'green' }
//             }>Nitish</NavLink></li>
//         </ul>
//       </div>
//       <Route path="/Peter/"  strict render={
//           () => {
//             return (<h1>Welcome Peter</h1>);
//           }
//         } />

//         <Route path="/Nitish/"  strict render={
//           () => {
//             return (<h1>Welcome Nitish</h1>);
//           }
//         } />
//     </Router>
//   )
// }





class App extends Component {
  constructor(props){
    super(props)
    this.state={
    loggedIn : false,
    email_login:'',
    password_login:'',
    email_signup:'',
    password_signup:'',
    name:'',
    confirm_password:''
  }

  const myfunlogin=()=>{
    const {email_login,password_login} = this.state;
  }



  }
  loginHandle = () => {
    this.setState(prevState => ({loggedIn : !prevState.loggedIn}))
  }

 validate= () =>{
   var ele=document.getElementById("mydiv");
   ele.classList.add("was-validated");
   
 }
 myfunsignup= () =>{
  const {name,email_signup,password_signup,confirm_password} = this.state;
  
  
    document.getElementById("mydiv1").classList.add("was-validated");
    
 }
 validate1= () =>{
  
  var ele1=document.getElementById("email");
  
  ele1.classList.add("was-validated");
  
}
validate2= () =>{
  
  var ele2=document.getElementById("password1");
  ele2.classList.add("was-validated");
  
}
validate8= (even) =>{
  
  var ele9=document.getElementById("password");
  ele9.classList.add("was-validated");
  const ele12=even.target.value;
  
}

validate3= () =>{
  var ele3=document.getElementById("mydiv1");
  ele3.classList.add("was-validated");
  
}
validate4= () =>{
  var ele4=document.getElementById("name");
  ele4.classList.add("was-validated");
  
}
validate5= (even) =>{
  var ele11=document.getElementById("password");
  let ele5=document.getElementById("confirm_password");
  // var ele12=document.getElementById("password").even.target.value;
  ele5.classList.add("was-validated");
  // var ele7=even.target.value;
  // if(ele12 == ele7 ){
  //   let ele6=document.getElementById("error");
  //   // document.getElementById("sub").href="/login/";
  //   ele6.innerHTML="";
  // }  
  // else{
  //   let ele10=document.getElementById("error");
  //   ele10.innerHTML="Password doesnot match";
  //   // document.getElementById("sub").href="/signup/";
  // }
}
 
handle(even)
{
  const ele5=(even.target.value);
}
    

  myelement = () => {return(<div>
    <Form id="mydiv" className="login-form" action="/sidebar/" >
         <h1 style={{textAlign: 'center'}}>LOGIN PAGE</h1>
         <div className="form-group">
           <Label>Email</Label><br/>
           <input className="form-control"  id="email" name="email" type="email" placeholder="Email" onChange={this.validate1} required/>
           <pre className="error"></pre>
           {/* <div class="invalid-feedback">Example invalid custom select feedback</div> */}
         </div>
         <div className="form-group">
           <Label>Password</Label><br/>
           <input className="form-control" id="password1" name="password1" type="password" placeholder="Password" onChange={this.validate2} required/>
           <pre className="error"></pre>
         </div>
         <button className="btn-lg btn-dark btn-block" href="/sidebar/" onClick={this.validate} style={{textAlign: 'center'}} >Log In</button>
         {/* <a className="btn-lg btn-dark btn-block" href="/sidebar/" style={{textAlign: 'center'}} onClick={()=>alert("Hey!")} >Log In</a> */}
         {/* <button className="btn-lg btn-dark btn-block"  href="/logout" >Log In</button> */}
         <div className="text-center pt-3">
           Or continue with your Social Account
         </div>
         <FacebookLoginButton className="mt-3 mb-3" />
         <div className="text-center">
         <a href="/signup/">Sign Up</a>
         <span className="p-2">|</span> 
         <a href="/forgot-password">Forgot Password</a>
         </div>
       </Form>           
    {/* <p>Login Form</p>
    <input type="text" placeholder="Email"/>
    <input type="password" placeholder="Password"/>
    <button>Login</button> */}
  </div>);}

myelement1 = () => {return(<div>
  <Form id="mydiv1" className="login-form" action="/login/">
       <h1 style={{textAlign: 'center'}}>REGISTER PAGE</h1>
       <div className="form-group">
         <Label>Name</Label><br/>
         <input className="form-control"  name="name" id="name" type="text" placeholder="Name" onChange={this.validate4} required/>
       </div>
       <div className="form-group">
         <Label>Email</Label><br/>
         <input className="form-control" name="email" id="email" type="email" placeholder="Email" onChange={this.validate1} required/>
       </div>
       <div className="form-group">
         <Label>Password</Label><br/>
         <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange={this.validate8} required/>
       </div>
       
       <button id="sub" className="btn-lg btn-dark btn-block" href="/login/" onClick={this.myfunsignup.bind(this)} style={{textAlign: 'center'}}>Sign UP</button>
       {/* <a className="btn-lg btn-dark btn-block" href="/login/" style={{textAlign: 'center'}}>Sign Up</a> */}
       {/* <button className="btn-lg btn-dark btn-block"  href="/logout" >Log In</button> */}
       {/* <div className="text-center pt-3">
         Or continue with your Social Account
       </div>
       <FacebookLoginButton className="mt-3 mb-3" /> */}
       <div className="text-center">
       
       <a>Already a Member</a>
       
       <span className="p-2">|</span> 
       <a href="/login/">Log In</a>
       </div>
     </Form>           
  {/* <p>Login Form</p>
  <input type="text" placeholder="Email"/>
  <input type="password" placeholder="Password"/>
  <button>Login</button> */}
</div>);}

  render(){
    return (
      <Router>
        <div className="App" className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </Button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <NavLink className="list-group-item" to="/" exact strict >Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="list-group-item" to="/login/"  >LOGIN</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="list-group-item" to="/about/"  >About</NavLink>
      </li>
      <li className="nav-item">
      {/* <a className="nav-link list-group-item list-group-item-action list-group-item-light" href="/features/">Features</a> */}
        <NavLink className="list-group-item" to="/features/"  >Features</NavLink>
      </li>
      
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        {/* <Route path="/"  render={ navigator } /> */}
          {/* <ul>
            
            <li><NavLink to="/"  activeStyle={
              {color:'green' }
            } >Home</NavLink></li>
            <li><NavLink to="/about/"  activeStyle={
              {color:'green' }
            }>About</NavLink></li>
            <li><NavLink to="/login/"  activeStyle={
              {color:'green' }
            }>Log In</NavLink></li>
            <li><NavLink to="/user/Peter"  activeStyle={
              {color:'green' }
            }>Peter</NavLink></li>
            <li><NavLink to="/user/Nitish"  activeStyle={
              {color:'green' }
            }>Nitish</NavLink></li>
          </ul>
        <input type="button" value={this.state.loggedIn ? 'Log Out' : 'Log In'} onClick={this.loginHandle.bind(this)} /> */}

        <Route path="/" exact strict render={
          () => {
            return (<h1>Welcome Home</h1>);
          }
        } /> 

        <Route path="/about/" exact strict render={
          () => {
            return (<h1>Welcome About</h1>);
          }
        } />

        <Route path="/dashboard/" exact strict render={
          () => {
            return (
             
              
              <div className="main">
              <Sidebar />
              <div className="row"  >
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a className="btn-lg btn-success btn-block stretched-link" href="/create/">Create Event</a></div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a className="btn-lg btn-info btn-block" href="/edit/">Edit Event</a></div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a className="btn-lg btn-info btn-block" href="/show/">Show Event</a></div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a className="btn-lg btn-danger btn-block" href="/delete/">Delete Event</a></div>
              </div>
              
              </div>);
          }
        } />

        <Route path="/sidebar/"  strict render={
          () => {
            return (<div><Sidebar/></div>);
          }
        } />

        <Route path="/features/"  strict render={
          () => {
            return (<h1>Welcome Features</h1>);
          }
        } />

        <Route path="/create/"  strict render={
          () => {
            return (
              <Create />
            )}
        } />

        <Route path="/edit/"  strict render={
          () => {
            return (
              <Edit />
            )}
        } />

        <Route path="/show/"  strict render={
          () => {
            return (
              <Show />
            )}
        } />

        <Route path="/delete/"  strict render={
          () => {
            return (
              <Del />
            )}
        } />

        <Route path="/login/"  strict render={ this.myelement } />
        <Route path="/signup/"  strict render={ this.myelement1 } />

        <Route path="/user/:username"  strict render = {({match}) => 
          this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to='/' />)
        } />

        </div>
      </Router>
    );
  }
}



export default App;
