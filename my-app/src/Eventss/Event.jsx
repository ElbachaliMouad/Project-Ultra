export default function Event(){
    const handleClick= () =>{//arow function 

    alert('Boom!');
console.log('ok')};

    return <div>
        <button>Click to increment </button>
        <button onClick={handleClick}></button>
    </div>

}
