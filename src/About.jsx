import React from "react";
import web from "../src/img/us.jpg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About =() =>{
    return(
        <>
    <Common  name="So you want to know more about"
    imgsrc={web}
    visit="/contact"
    btname="Contact Now"

    />
        </>
    );
};
export default About;