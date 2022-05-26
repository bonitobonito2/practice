
import React, {useState} from  "react";
import Card from '../UI/card'
import Classes from './userList.module.css'
import Button  from '../UI/button'



const userList = (props) =>{
  
    
    return(
        <Card klasisSaxeli = {Classes.users}>
            {props.user.length===0}
            <div>
       <ul>
           {props.user.map((user,index) =>
           <li key={index}>
                name: {user.name} 
                <br/>
                 age: {user.age} years old 
                 <br/>
                 <br/>
                 <button onClick={()=>props.deleteUser(index)}>delete</button >
                  </li>
           
           
              
           )}
       </ul>
       </div>
       
       
       </Card>
    )
    
}

export default userList;