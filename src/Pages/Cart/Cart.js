import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mainGrey } from '../../constants';

const Container = styled.div`
  width: 100%;
  height: 100;
  background-color: ${mainGrey};
  overflow-y: hidden;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

const MainDataContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
  background-color: ${mainGrey};
`;

const Productscontainer = styled.div`
  overflow-y: scroll;
  background-color: white;
  width: 730px;
  height: 715px;
  border-radius: 6px;
`;

const Values = styled.div`
  width: 598px;
  height: 520px;
  background-color: white;
  border-radius: 6px;
  overflow-y: scroll;
`;

export default function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    } else {
      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const promisse = axios.get(
        `${process.env.REACT_APP_BACK_END_API_URI}/cart`,
        config
      );
      promisse.then((response) => {
        setCart(response.data);
      });
      promisse.catch((error) => {
        return alert(
          `Erro: ${error.response.status}\n, Algo deu errado tente novamente mais tarde!`
        );
      });
    }
  }, []);
  return (
    <Container>
      <Title>
        <ion-icon name="bag-handle-outline"></ion-icon>
        <h1>MEU CARRINHO</h1>
      </Title>
      <MainDataContainer>
        <Productscontainer></Productscontainer>
        <Values></Values>
      </MainDataContainer>
    </Container>
  );
}
