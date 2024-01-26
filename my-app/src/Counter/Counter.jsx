import React,{ useEffect, useState } from "react";
export default function Counter({initialvalue,step}){
    const [count, setCount]=useState(initialvalue);
    const  [time, setTime]=useState(new Date());

    
let timer =null;
    
    useEffect(()=>{console.log('component moiunted (executed after render() one time')},[])
    useEffect(()=>{ console.log('component mounted '); timer=setInterval(()=>{setTime(new Date())},1000); return ()=>clearInterval(timer)})
    useEffect(()=>{console.log('component updated execetued after render one time of the ounter is changed one time')},[count])

    return <>
    <strong >
        {count}    ||   {time.toString()}
    </strong>
    <div>
        <span>
            <button onClick={()=>{setCount(prevState=>{return prevState+step})}}></button>
        </span>
    </div>
         </>

}
/*
export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
        console.log('constructor')
    }

     changestate=()=>{
         this.setState({counter:1});

    }
    render() {
        console.log('render')
    return <h1>ok</h1>}


   componentDidMount(){
    console.log('component did mount');
   }



   componentDidUpdate(prevProps,prevState){
    if (prevState !== this.State){console.log('state are changed');}
    console.log('conponent updated');
    console.log(prevState,this.State);
   }



}*/