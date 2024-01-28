import { useEffect,useState } from "react"
import Product from "./Product"
export default function ProductList(){
    const [productList,setProductList]=useState([])
    const [serchinput, setSearchInput]=useState('')
    const [categories , setCategoryList]=useState([])
    //on veut recuperer la valeur donc on doit la stocker dans une 
   // place dans on ulitse states
    const display=() =>{
        console.log(serchinput)
            const productTemp=productList.filter((product)=>{
                return product.title.includes(serchinput) || product.id.toString().startsWith(serchinput) 
            ||product.description.includes(serchinput) 
            })

        if (productList.length>0){
            

        return productTemp.map((product,key)=>{return <Product product={product} key={key}/>})}
        

        return <tr><td>No items</td></tr>}


        const displaycategory=() =>{
            return categories.map((categorie)=>{<button>{categories}</button>})
        }
    

    const getproducts=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(response=>setProductList(response))
        .catch((error)=>console.error('Error',error));
    }
    
    const getcategories=()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(response=>setCategoryList(response))
        .catch((error)=>console.error('Error',error));
    }


    useEffect(()=>{getproducts()},[]);


    const handleSearch=(e)=>{
     e.preventDefault();
     const value=document.querySelector('#search').value;
     setSearchInput(value)
     console.log(serchinput)


    }
    return  <div className='container-fluix mx-auto w-75 my-5'><h1>List des produits:</h1>
    <h2>Search:</h2>
    
    <form >
        <div className="row g-3 align-items-centre">

      <div className="col-auto">

      <input className="form-control" type="text" id="search" placeholder="Search" />
</div>
<div className="col-auto">

      <input className="btn btn-primary" type="submit" value='Search' onClick={handleSearch}/>
</div>
      </div>
      <div className="row g-3 align-items-centre">
     {getcategories()}
     <div className="btn-group">{displaycategory()}</div>
</div>
    </form>

    
<table className='table'>
    <thead><tr><th>ID</th>
    <th>Title</th>
    <th>Price</th>
    <th>Description</th>
    <th>Category</th>
    <th>Image</th>
    <th>Rating</th>

    </tr></thead>
<tbody>
{display()}
</tbody>


    </table> 
     </div>
}