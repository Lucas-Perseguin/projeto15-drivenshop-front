import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export default function Item(props) {
  const { product } = props;
  const navigate = useNavigate();

  const realPrice = product.price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <>
      <Container onClick={() => navigate(`produto/${product._id}`)}>
        <Image src={product.image} alt="Product picture"></Image>
        <ProductName>{product.name}</ProductName>
        <Price>{realPrice}</Price>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 12.5em;
  height: 22em;
  text-align: center;
  margin: 0 1em 1em 1em;
`;
const Image = styled.img`
  width: 100%;
  height: 11em;
  background-color: #fff;
  border-radius: 0.31em;
  margin-bottom: 0.5em;
  cursor: pointer;
`;
const ProductName = styled.p`
  width: 100%;
  height: 5em;
  color: #fff;
  font-size: 0.8em;
  line-height: 1.5;
  cursor: pointer;
`;
const Price = styled.p`
  width: 100%;
  height: 2em;
  color: #fff;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 700;
`
