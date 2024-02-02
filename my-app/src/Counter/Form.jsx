import React,{ useEffect, useRef, useState } from "react";
export default function Form({initialvalue,step}){
    const inputNmaRef=useRef()
    const iputageref=useRef()
    const contryref=useRef()
    const acceptcondition=useRef()
    const cityref=useRef()
  const [formvalue,setFormvalue]=useState({nom:'' 
   ,age:'',
   country:'MA',
   city:'',
   acceptcondition:false
   })
const handleform=(e)=>{
    e.preventDefault()
    const target= e.currentTarget
    const id =target.id
    let value=target.value
    if(target.type ==='checkbox'){
        value=target.checked

    }
    setFormvalue(prevState=>{ return  {...prevState, ...{[id]:value}}})
}

useEffect(()=>{
    inputNmaRef.current.value='mouad'
    iputageref.current.value=new Date().toDateString().substring(0,10)
    contryref.current.value='MA...'
    cityref.current.value='Marrakech'
    acceptcondition.current.checked=false
},[])
const handlesubmit=(e)=>{e.preventDefault() 
    console.log(inputNmaRef.current.value )
    console.log(iputageref.current.value )
    console.log(contryref.current.value )
    console.log(cityref.current.value )
    console.log(acceptcondition.current.checked )
     setFormvalue({nom:inputNmaRef.current.value ,
        age:iputageref.current.value,
        country:contryref.current.value,
        city:cityref.current.value,
        acceptcondition:acceptcondition.current.checked})
console.log(formvalue)
}

return<><h1 className='container-fluid mx-auto w-75 my-5' >Form: {JSON.stringify(formvalue)}</h1> <div className='container-fluid mx-auto w-75 my-5'><form>
<div className="form-group col-md-4">
  <label >Name</label>
  <input type="text" className="form-control" id="nom"  ref={inputNmaRef} />
</div>

<div className="form-group col-md-4">
  <label>Age</label>
  <input type="Date" className="form-control" id="age"  ref={iputageref}  />
</div>


<div className="form-group col-md-4">
  <label >City</label>
  <input type="text" className="form-control" id="city" ref={cityref}   />
</div>

<div className="form-group col-md-4">
      <label htmlFor="inputState">Country</label>
      <select id="country" className="form-control" ref={contryref} >
        <option selected='MA' >MA...</option>
        <option selected='TN' >TN...</option>
        <option selected='AL' >AL...</option>
        <option selected='LI' >LIB...</option>

      </select>
    </div>
<div className="form-check">
  <input type="checkbox" className="form-check-input" id="acceptcondition"  ref={acceptcondition} />
  <label className="form-check-label" >Check me out</label>
</div>
<button onClick={handlesubmit} type="submit" className="btn btn-primary"  >Submit</button>
</form>
</div></>

}