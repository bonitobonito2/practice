import React,{useState} from "react";
import AddUser from './components/users/addUser'
import UserList from './components/users/userList'



function App(){
    const [userList,setUserList] = useState([])
    const addUserToList = (uName,uAge)=>{
        setUserList((preventUserList)=>{
            return [...preventUserList,{name:uName,age:uAge}]
        })
    }
    const deleteUser = (index) =>{
        var newPersonList = [...userList]
        newPersonList.splice(index,1)
        setUserList(newPersonList)
    }
    return(
        <>
            <AddUser onAdUser = {addUserToList} />
            <UserList deleteUser = {deleteUser} user = {userList} />
        </>
    )
}

export default App;