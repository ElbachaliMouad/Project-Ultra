import React, { Component, useState } from "react";

export default function TestFiled(){
  const [name,setname]=useState('');
  const [age,setage]=useState('');


  const hanfleNmaeInputchange= ()=>{
    const namee=document.querySelector('#name').value
    setname(namee);


    
  }
  const handleageeInputchange= ()=>{
    const agee=document.querySelector('#age').value
    setage(agee);


  }

  const handlesubmit =(e)=>{
    e.preventDefault();
    console.log(
      {
       name , age
      }
    )

  }

    return <div>
      <form>
        <input type="text"   id='name' onChange={hanfleNmaeInputchange} placeholder="Name"/>
        <input type="number" id='age' onChange={handleageeInputchange} placeholder="Age"/>
        <input type="submit" onClick={handlesubmit} placeholder="Submit"/>
      </form>
    </div>
      

}

