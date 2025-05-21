
import React, { render } from "preact/compat";
import logo from "../../images/toot-free.svg";
import classes from './my-component.module.css';

function App() {
    return (
        <div class={classes.red}>
            <p>Or here either</p>
            <img src={logo} alt="toot free alt" />
        </div>
    )
    
}

const entry = document.getElementById("components");

if(entry){
    render(<App />, entry);
}