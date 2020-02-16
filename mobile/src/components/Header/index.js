import React from 'react';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import { Container, Logo, Cart, Amount } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </TouchableOpacity>

      <Cart onPress={() => navigation.navigate('Cart')}>
        <MdIcon name="shopping-basket" size={20} color="#fff" />
        <Amount>3</Amount>
      </Cart>
    </Container>
  );
}
