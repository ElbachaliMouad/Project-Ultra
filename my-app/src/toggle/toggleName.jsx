import  React  from "react";
import HelloWorld from "../helloword/HelloWorld";
export default class ToggleName extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayName:true

        }
    }
    
     toggleName=()=>{
        this.setState(prevState=>{return {displayName: !prevState.displayName}})
    }
    render(){ 
        return  <><h1>
            <button onClick={this.toggleName}>{this.state.displayName}</button>
        {this.state.displayName===true ? <HelloWorld lastname={"elbachali"}/> : undefined}</h1></> 
    }
}