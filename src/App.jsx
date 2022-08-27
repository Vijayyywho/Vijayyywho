import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from "react";
import Home from "./Home"
import Service  from "./Service";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from './Footer';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{Switch, Route,Redirect} from "react-router-dom";
const App =() =>{
    return(
<>
<Navbar />
<switch>
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/service" component={Service}/>
<Redirect to="/" />
</switch>
<Footer/>
</>
    );
};
export default  App;