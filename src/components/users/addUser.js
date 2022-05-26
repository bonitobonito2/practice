import React, {useState,useRef} from "react";
import Card from "../UI/card"
import classes from "./addUser.module.css"
import Button from "../UI/button"
import ErorModel from '../UI/erorModule'
import Wrapper from "../Helpers/Wrapper";



const AddUser = props =>{
const nameInputraf = useRef()
const ageInputraf = useRef()

const [enteredUserName,setEnteredUserName] = useState('')
const [enteredUserAge,setEnteredUserAge] = useState('')
const [error,setError] = useState()
    const addUserHandler=(event)=>{
        event.preventDefault()
        console.log(nameInputraf.current.value,ageInputraf.current.value)
        if(enteredUserAge.trim().length===0 || enteredUserName.trim().length===0){
            setError({
                tittle:'empty inputs',
                message:'fill form'
            })
            return
        }
        if(isNaN(enteredUserAge)===true){
            setError({
                tittle:'invalid input',
                message:'age is not a number'
            })
            return
        }
        if(+enteredUserAge<1){
            setError({
                tittle:'invalid input',
                message:'invalid age'
            })
            return;
        }
        if(+enteredUserAge>120){
            setError({
                tittle:'invalid input',
                message:'invalid age'
            })
            return
        }
            props.onAdUser(enteredUserName,enteredUserAge);
            setEnteredUserAge(' ')
            setEnteredUserName(' ')
    }
    const removeEror =()=>{
    setError()
    }
    const changedUserNameHandler =(event)=> setEnteredUserName(event.target.value)
    const changedUserAgeHandler =(event)=> setEnteredUserAge(event.target.value)

    return(
         <React.Fragment>
             {error &&
              <ErorModel click = {removeEror}
                         tittle ={error.tittle} 
                         massage = {error.message}
                          />}

        <Card klasisSaxeli = {classes.input} >

        <form  onSubmit={addUserHandler}>
            <label htmlFor="username" >username:</label>

            <input 
            value={enteredUserName} 
            onChange={changedUserNameHandler} 
            id="username" 
            type='text'
            ref={nameInputraf}/>

            <br />

            <label htmlFor="years" >year:</label>

            <input
             value={enteredUserAge}
             onChange={changedUserAgeHandler}
             id="years"
             type='text'
             ref = {ageInputraf}/>

           <Button type={'submit'}>submit</Button>
        </form>
       
        </Card>
        </React.Fragment>
      
    )
}

export default AddUser;