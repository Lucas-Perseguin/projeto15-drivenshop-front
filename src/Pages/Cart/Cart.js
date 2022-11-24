import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mainGrey } from '../../constants';
import LoadingPage from '../LoadingPage/LoadingPage';
import ProductInCart from './ProductInCart';

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
  const [isLoading, setLoading] = useState(true);
  const [totalValue, setTotalValue] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const localCart = JSON.parse(localStorage.getItem('cart'));
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    if (token && localCart) {
      localCart.forEach((product) => {
        const promisse = axios.post(
          `${process.env.REACT_APP_BACK_END_API_URI}/add/${product._id}`,
          { amount: product.amount },
          config
        );
        promisse.then((response) => {});
        promisse.catch((error) => {
          return alert(
            `Erro: ${error.response.status}\nAlgo deu errado, tente novamente mais tarde!`
          );
        });
      });
      localStorage.removeItem('cart');
    }
    if (!token) {
      localCart.forEach((product) => {
        const promisse = axios.get(
          `${process.env.REACT_APP_BACK_END_API_URI}/product/${product._id}`
        );
        promisse.then((response) => {
          cart.push(response.data);
        });
        promisse.catch((error) => {
          return alert(
            `Erro: ${error.response.status}\nAlgo deu errado, tente novamente mais tarde!`
          );
        });
      });
      setCart(cart);
      setLoading(false);
    } else {
      const promisse = axios.get(
        `${process.env.REACT_APP_BACK_END_API_URI}/cart`,
        config
      );
      promisse.then((response) => {
        setCart(response.data);
      });
      promisse.catch((error) => {
        return alert(
          `Erro: ${error.response.status}\n,Algo deu errado tente novamente mais tarde!`
        );
      });
      setLoading(false);
    }
    const auxTotalValue = cart.reduce((sum, product) => (sum += product.price));
    setTotalValue(auxTotalValue);
  }, []);
  if (isLoading) {
    return <LoadingPage text="Carregando itens do carrinho!" />;
  } else {
    return (
      <Container>
        <Title>
          <ion-icon name="bag-handle-outline"></ion-icon>
          <h1>MEU CARRINHO</h1>
        </Title>
        <MainDataContainer>
          <Productscontainer>
            {cart.map((product) => (
              <ProductInCart
                key={product._id}
                product={product}
                cart={cart}
                setCart={setCart}
                totalValue={totalValue}
                setTotalValue={setTotalValue}
              />
            ))}
          </Productscontainer>
          <Values>
            <h1>
              Total:{' '}
              {totalValue.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h1>
          </Values>
        </MainDataContainer>
      </Container>
    );
  }
}