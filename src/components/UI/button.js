import React from "react";
import classes from './button.module.css'


const button = (props) =>{
    return(
        <center>
        <button 
          className={classes.button}
          type={props.type || 'button'}
           onClick={props.onClick} >
         {props.children}
        </button>
        </center>
    )
}

export default button