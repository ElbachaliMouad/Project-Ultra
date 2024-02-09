import React,{ Component, useState } from 'react';

/*function Fruite({fruits}){
    const displayfruit= ()=>  fruits.map(fruit => <li>{fruit}</li>)

   return <><h1 className='h1'><ul>
    {displayfruit()}</ul></h1></>}


///////////////////////////////

function Example() {
    // Déclare une nouvelle variable d'état, qu’on va appeler « count »
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </div>
    );
  }*/

 /* export default class Essau extends Component {
    constructor(props){
      super(props);
      this.state={
        counter:0
      }
      
    }
      handlerClick=()=>{
      this.setState(prevState=>{

        return {counter:prevState.counter+1}
      }
      )

  }
}*/

export default  function  Fruite (){

  const [fruit,setFruit]=useState('');
  const [fruitList,setFruitList]=useState([]);
/////////////////////////////////////////////////
const displayfruit = () => 
   fruitList.map((fruit, fruitkey) => (
    <li key={fruitkey}>{fruit}</li>
  ));

  const handleinput=()=>{const fruitvalue=document.querySelector('#fruit').value; setFruit(fruitvalue)}
  

  const handleAddFruit=(e)=>{
    e.preventDefault();
    setFruitList([...fruitList,fruit])
  console.log(fruitList)}

  
  
  return  <>
  <span>
  <form>
    <input type="text"   id='fruit' onChange={handleinput} placeholder="fruit"/>
    <input type="submit" onClick={handleAddFruit} placeholder="Submit"/>
  </form>
  </span>
    <h1 className='h1'>Fruit:</h1>
    <ul>
      {displayfruit()}
      </ul>
    </>


  }
  
    
