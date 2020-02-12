import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
  const increment = product => updateAmount(product.id, product.amount + 1);
  const decrement = product => updateAmount(product.id, product.amount - 1);

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
                    <MdRemoveCircleOutline
                      color="#7159c1"
                      onClick={() => decrement(item)}
                    />
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      color="#7159c1"
                      onClick={() => increment(item)}
                    />
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

const mapStateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
