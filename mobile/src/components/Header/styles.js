import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #191920;
`;

export const Logo = styled.Image`
  height: 25px;
  width: 192px;
`;

export const Cart = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  position: absolute;
  top: -5px;
  left: 11px;

  padding: 0px 4px;
  border-radius: 10px;
  font-size: 12px;

  color: #fff;
  background: #7159c1;
`;
