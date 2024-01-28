import Rating from "./Rating"
export default function  Product({product},{key}){
    return <tr><td>{product.id}</td>
    <td>{product.title}</td>
    <td>{product.price}</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td><img src={product.image}    width={'250px'} /></td>
<td><Rating  rate={product.rating.rate}  count={product.rating.count}/></td>
    </tr>
}