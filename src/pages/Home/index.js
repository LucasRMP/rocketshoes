import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

function Home({ addToCart, amount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get('/products');

      const formattedData = data.map(p => ({
        ...p,
        formattedPrice: formatPrice(p.price),
      }));

      setProducts(formattedData);
    };
    getProducts();
  }, []);

  const handleAddProduct = product => {
    addToCart(product);
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="Coolest Shoe" />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>
          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdShoppingCart size={16} color="#fff" /> {amount[product.id] || 0}
            </div>
            <span>Add to cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, p) => {
    amount[p.id] = p.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
