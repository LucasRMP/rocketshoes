import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/sapatenis-lona-sapatofran-polo-masculino/03/HAP-0176-003/HAP-0176-003_detalhe2.jpg?ims=326x"
                alt="coolest shoe"
              />
            </td>
            <td>
              <strong>Collest shoe</strong>
              <span>USD 142.48</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline color="#7159c1" />
                </button>
                <input type="number" readOnly value={5} />
                <button type="button"> 
                  <MdAddCircleOutline color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>USD 712.40</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
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
