import { useRef, useState } from "react"

export default function Formvalidation (){
 const [error,seterrorlist]=useState([])
 const [formsent,setformsent]=useState(false)
  const name=useRef();
  const email=useRef();
  const message=useRef();
  const country=useRef();
  const condition=useRef();

  const validateform=()=>{
    const namevalue=name.current.value
    const emailvalue=email.current.value
    const messagevalue=message.current.value
    const countryvalue=country.current.value
    const conditionvalue=condition.current.checked

    console.log(conditionvalue)
    let isformvalide=true
    if (namevalue.trim()===''){
      isformvalide=false
      seterrorlist(prevState=>  [...prevState, 'name required'])
      //setstate(take the value to insert 
       
    }
    if (emailvalue.trim()===''){
      isformvalide=false
      seterrorlist(prevState=>  [...prevState, 'email required'])
      //setstate(take the value to insert 
       
    }
    else if (!emailvalue.match(/^\S+@\S+\.\S+$/)){

      isformvalide=false
      seterrorlist(prevState=>  [...prevState, 'email  format is invalid'])
    }
    
    if (messagevalue.trim()===''){
      isformvalide=false
      seterrorlist(prevState=>  [...prevState, 'message required'])
      //setstate(take the value to insert 
       
    }
    if (countryvalue.trim()===''){
      isformvalide=false
      seterrorlist(prevState=>  [...prevState, 'country required'])
      //setstate(take the value to insert 
       
    }

    if (!conditionvalue){
      isformvalide=false
      seterrorlist(prevState=>  [...prevState, 'condition  checked required'])
      //setstate(take the value to insert 
       

    }


    return isformvalide
    // response

  }


  const handlesubmit=(e)=>{
    console.log(e)
    seterrorlist([])
    if (!validateform())
    e.preventDefault()
    setformsent(true)
  }
    return <><h1 className='container-fluid mx-auto w-75 my-5' >Contact form :
    
    {formsent ? (
      error.length !== 0 ? (
        <h2>
          <div className="alert alert-danger col-md-8" role="alert">
            <ul>{error.map((er, key) => <li key={key}>{er}</li>)}</ul>
          </div>
        </h2>
      ) : (
        <div className="alert alert-success col-md-8" role="alert">
          Form valid
        </div>
      )
    ) : (
      <></>
    )}
    
    
     </h1> <div className='container-fluid mx-auto w-75 my-5'><form onSubmit={handlesubmit}>
    <div className="form-group col-md-8">
      <label >Name</label>
      <input type="text" className="form-control" id="nom"  ref={name}  />
    </div>
    
    <div className="form-group col-md-8">
      <label>Email</label>
      <input type="text" className="form-control" id="age"   ref={email} />
    </div>
    
    

    <div class="form-group col-md-8">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={message}></textarea>
  </div>

    <div className="form-group col-md-8">
          <label htmlFor="inputState">Country</label>
          <select id="country" className="form-control" ref={country} >
            <option selected='MA' >MA...</option>
            <option selected='TN' >TN...</option>
            <option selected='AL' >AL...</option>
            <option selected='LI' >LIB...</option>
    
          </select>
        </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="acceptcondition"  ref={condition} />
      <label className="form-check-label"  >Check me out</label>
    </div>
    <button  type="submit" className="btn btn-primary col-md-8"  >Submit</button>
    </form>
    </div></>
}