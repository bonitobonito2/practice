import React from "react";
import Card from './card'
import Button from "./button";
import classes from "./erorModule.module.css"
import ReactDOM from 'react-dom'

const Backdrop = props=>{
    return  <div className="classes.backdrop" />
}
const BodalOverLay = props =>{
    return (
        <Card klasisSaxeli = {classes.modal}>
            <header className={classes.header}>
             <p>{props.tittle}</p>
            </header>
            <div className={classes.content}>
                <p>{props.massage}</p>
            </div>
            <footer>
                <Button onClick={props.click}>okay</Button>
            </footer>
        </Card>
    )
}
const erro = props =>{
    return (
     <React.Fragment>
       {ReactDOM.createPortal(<Backdrop/>,
       document.getElementById("backdrop-root"))}

       {ReactDOM.createPortal(<BodalOverLay 
       click = {props.click} 
       tittle={props.tittle} 
       massage = {props.massage} />,
       document.getElementById('modal-root'))}
       
       </React.Fragment>
    )
}

export default erro;