import { useState, useEffect } from 'react';
import Product from './Product';

export default function ProductList() {
  const [searchInput, setSearchInput] = useState('');
  const [productList, setProductList] = useState([]);
  const [categories, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = document.querySelector('#search').value;
    setSearchInput(value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const display = () => {
    const filteredProducts = productList.filter((product) => {
      const includesSearch = product.title.includes(searchInput) || product.description.includes(searchInput);
      const includesCategory = !selectedCategory || product.category === selectedCategory;
      return includesSearch && includesCategory;
    });

    if (filteredProducts.length > 0) {
      return filteredProducts.map((product, key) => <Product product={product} key={key} />);
    }

    return <tr><td colSpan={7}>No items</td></tr>;
  };

  const displayCategory = () => {
    return categories.map((category, key) => (
      <button
        key={key}
        className={`btn ${selectedCategory === category ? 'btn-warning' : 'btn-secondary'}`}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
    ));
  };

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => setProductList(response))
      .catch((error) => console.error('Error', error));
  };

  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((response) => setCategoryList(response));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className='container-fluid mx-auto w-75 my-5'>
      <h1>Liste des produits:</h1>
      <h2>Recherche:</h2>
      <form onSubmit={handleSearch}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Recherche</label>
          </div>
          <div className="col-auto">
            <input id="search" onChange={handleSearch} className="form-control" />
          </div>
          <div className="col-auto">
            <input type="submit" className="btn btn-primary" value='Recherche' />
          </div>
        </div>
        <hr />
        <h5>Catégorie:</h5>
        <div className="row g-3 align-items-center">
          <div className="btn-group">
            {displayCategory()}
          </div>
        </div>
        <hr />
      </form>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Image</th>
            <th>Évaluation</th>
          </tr>
        </thead>
        <tbody>
          {display()}
        </tbody>
      </table>
    </div>
  );
}
