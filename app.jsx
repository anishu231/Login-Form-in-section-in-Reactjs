import React, { useState } from "react";
const App=()=>{
    const [fullName,setFullName]=useState({
        fName:"",
        lName:"",
        email: "",
        phone: "",
    });
    const InputEvent=(event)=>{
       const value=event.target.value;
       const name=event.target.name; 
       setFullName((preValue)=>{
       // if(name==="fName"){
         //   return{
                // fName: value,
           //     lName: preValue.lName,
             //   email: preValue.email,
               // phone: preValue.phone,
            //};
        //} else if(name==="lName"){
          //  return{
            //    fName: preValue.fName,
              //  lName: value,
                //email: preValue.email,
                //phone: preValue.phone,
            //};
        //}else if(name==="email"){
          //  return{
            //    fName: preValue.fName,
              //  lName: preValue.lName,
                //email: value,
                //phone: preValue.phone,
            //};
        //}else if(name==="phone"){
          //  return{
            //    fName: preValue.fName,
              //  lName: preValue.lName,
                //email: preValue.email,
                //phone: value,
            //};
        //};
        return {
            ...preValue,
            [name]: value,
        }
       });
    };
    
    const onSubmits=(event)=>{
        event.preventDefault();
        alert('form submitted'); 
    };
    
    return (
    <>
    <div className="main-div">
        <form onSubmit={onSubmits}> 
    <div>
        <h1>Hello  {fullName.fName}   {fullName.lName}</h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <input type="text" placeholder="Enter Your First  Name" name="fName" onChange={InputEvent}  value={fullName.fName} autoComplete="off"/>
        <input type="text" placeholder="Enter YourLast Name"name="lName" onChange={InputEvent} value={fullName.lName} autoComplete="off" />
        <input type="email" placeholder="Enter Your email"name="email" onChange={InputEvent} value={fullName.email} autoComplete="off"/>
        <input type="phone" placeholder="Enter Your phone no"name="phone" onChange={InputEvent} value={fullName.phone} autoComplete="off"/>
        <button type="submit" >Submit Me </button>
    </div>
    </form>
    </div>
    </>
    );
};
export default App;