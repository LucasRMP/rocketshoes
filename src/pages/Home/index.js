import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get('/products');

      const formattedData = data.map(p => ({
        ...p,
        price: formatPrice(p.price),
      }));

      setProducts(formattedData);
      console.log(formattedData);
    };
    getProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="Coolest Shoe" />
          <strong>{product.title}</strong>
          <span>{product.price}</span>
          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>Add to cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
