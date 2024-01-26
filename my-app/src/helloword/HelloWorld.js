import React from "react";
import {Component} from "react";


export default class  HelloWorld extends Component  
{   age=20

    componentDidMount(){
        console.log('componentDidMount')

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        const scroll={x:window.scrollX,y:window.scrollY};
        return scroll
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        window.scroll(snapshot.x+50,snapshot.y+30)
        console.log('componentDidUpdate')
    }


    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    
    render(){
    return <><h1>Myname is : {this.props.lastname} {" and i'm  " +( this.age>18 ? 'adult':'minor')}</h1>
      </>
   
   }
}