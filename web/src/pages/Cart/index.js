import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  const increment = product => updateAmountRequest(product.id, product.amount + 1);
  const decrement = product => updateAmountRequest(product.id, product.amount - 1);

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
                <span>{item.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      color="#7159c1"
                      size={18}
                      onClick={() => decrement(item)}
                    />
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      color="#7159c1"
                      size={18}
                      onClick={() => increment(item)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{item.subtotal}</strong>
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
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(p => ({
    ...p,
    subtotal: formatPrice(p.price * p.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, p) => total + p.price * p.amount, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
