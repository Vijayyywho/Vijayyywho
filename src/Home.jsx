import React from "react";
import web from "../src/img/img5.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home =() =>{
    return(
        <>
        <Common 
        name="Get your buissness and amazing modern website with"
    imgsrc={web}
    visit="/service"
    btname="Know More" 

    />

        </>
    );
};
export default Home;