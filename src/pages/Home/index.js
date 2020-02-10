import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-lona-sapatofran-polo-masculino/03/HAP-0176-003/HAP-0176-003_detalhe2.jpg?ims=326x"
          alt="coolest shoe"
        />
        <strong>Very coolest shoe</strong>
        <span>USD 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-lona-sapatofran-polo-masculino/03/HAP-0176-003/HAP-0176-003_detalhe2.jpg?ims=326x"
          alt="coolest shoe"
        />
        <strong>Very coolest shoe</strong>
        <span>USD 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-lona-sapatofran-polo-masculino/03/HAP-0176-003/HAP-0176-003_detalhe2.jpg?ims=326x"
          alt="coolest shoe"
        />
        <strong>Very coolest shoe</strong>
        <span>USD 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-lona-sapatofran-polo-masculino/03/HAP-0176-003/HAP-0176-003_detalhe2.jpg?ims=326x"
          alt="coolest shoe"
        />
        <strong>Very coolest shoe</strong>
        <span>USD 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-lona-sapatofran-polo-masculino/03/HAP-0176-003/HAP-0176-003_detalhe2.jpg?ims=326x"
          alt="coolest shoe"
        />
        <strong>Very coolest shoe</strong>
        <span>USD 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
