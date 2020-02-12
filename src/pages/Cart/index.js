import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>
                <strong>{item.title}</strong>
                <span>{item.price}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button">
                    <MdAddCircleOutline color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{item.formattedPrice}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete
                    size={20}
                    color="#7159c1"
                    onClick={() => removeFromCart(item.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finish order</button>
        <Total>
          <span>TOTAL</span>
          <strong>USD 1920.20</strong>
        </Total>
      </footer>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
