import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { mainGrey, mainPink } from '../../constants';

const Container = styled.div`
  width: 100%;
  hr {
    width: 100%;
    background-color: ${mainPink};
    height: 2px;
    margin-bottom: 30px;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1``;

const Price = styled.div``;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 124px;
  height: 50px;
  button {
    width: 19px;
    height: 48px;
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    background-color: ${mainGrey};
  }
  div {
    width: 50px;
    height: 50px;
    text-align: center;
    color: black;
    background-color: white;
  }
`;

const Total = styled.div``;

export default function ProductInCart({
  product,
  cart,
  setCart,
  totalValue,
  setTotalValue,
}) {
  const [total, setTotal] = useState(product.price * product.amount);
  const [productAmount, setProductAmount] = useState(product.amount);

  function handleAdd() {
    const token = localStorage.getItem('token');
    if (token) {
      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const promisse = axios.post(
        `${process.env.REACT_APP_BACK_END_API_URI}/add/${product._id}`,
        { amount: 1 },
        config
      );
      promisse.then((response) => {
        setProductAmount(productAmount + 1);
        setTotal((productAmount + 1) * product.price);
        totalValue += product.price;
        setTotalValue(totalValue);
        cart.forEach((thisProduct) => {
          if (thisProduct._id === product._id) {
            thisProduct.amount++;
          }
          setCart(cart);
        });
      });
      promisse.catch((error) => {
        return alert(
          `Erro: ${error.response.status}\n, Algo deu errado tente novamente mais tarde!`
        );
      });
    } else {
      const localCart = JSON.parse(localStorage.getItem('token'));
      const index = localCart.findIndex(
        (cartProduct) => cartProduct._id === product._id
      );
      localCart[index].amount++;
      localStorage.setItem('cart', `${JSON.stringify(localCart)}`);
      setCart(localCart);
    }
  }

  function handleRemove() {
    if (productAmount === 1) {
      return handleDelete();
    }
    const token = localStorage.getItem('token');
    if (token) {
      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const promisse = axios.post(
        `${process.env.REACT_APP_BACK_END_API_URI}/remove/${product._id}`,
        null,
        config
      );
      promisse.then((response) => {
        setProductAmount(productAmount - 1);
        setTotal((productAmount - 1) * product.price);
        totalValue -= product.price;
        setTotalValue(totalValue);
        cart.forEach((thisProduct) => {
          if (thisProduct._id === product._id) {
            thisProduct.amount--;
          }
          setCart(cart);
        });
      });
      promisse.catch((error) => {
        return alert(
          `Erro: ${error.response.status}\n, Algo deu errado tente novamente mais tarde!`
        );
      });
    } else {
      const localCart = JSON.parse(localStorage.getItem('token'));
      const index = localCart.findIndex(
        (cartProduct) => cartProduct._id === product._id
      );
      localCart[index].amount--;
      localStorage.setItem('cart', `${JSON.stringify(localCart)}`);
      setCart(localCart);
    }
  }

  function handleDelete() {
    const token = localStorage.getItem('token');
    if (token) {
      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const promisse = axios.delete(
        `${process.env.REACT_APP_BACK_END_API_URI}/delete/${product._id}`,
        config
      );
      promisse.then((response) => {
        totalValue -= productAmount * product.price;
        setTotalValue(totalValue);
        const productIndex = cart.findIndex(
          (thisProduct) => thisProduct._id === product._id
        );
        cart.splice(productIndex, 1);
        setCart(cart);
      });
      promisse.catch((error) => {
        return alert(
          `Erro: ${error.response.status}\n, Algo deu errado tente novamente mais tarde!`
        );
      });
    } else {
      const localCart = JSON.parse(localStorage.getItem('token'));
      const filteredLocalCart = localCart.filter(
        (cartProduct) => cartProduct._id !== product._id
      );
      localStorage.setItem('cart', `${JSON.stringify(filteredLocalCart)}`);
      setCart(filteredLocalCart);
    }
  }

  return (
    <Container>
      <hr />
      <ProductContainer>
        <img src={product.image} alt={`Imagem do produto ${product.name}`} />
        <Name>{product.name}</Name>
        <Price>
          <h1>Cada</h1>
          <h1>
            {product.price?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
        </Price>
        <Counter>
          <button onClick={handleRemove}>-</button>
          <div>{productAmount}</div>
          <button onClick={handleAdd}>+</button>
        </Counter>
        <Total>
          <h1>Total</h1>
          <h1>
            {total?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
        </Total>
        <ion-icon name="trash-outline" onClick={handleDelete}></ion-icon>
      </ProductContainer>
      <hr />
    </Container>
  );
}
