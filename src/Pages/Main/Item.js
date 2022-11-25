import styled from "styled-components";
import { mainGrey, mainPink } from "../../constants";
export default function Item(props){
    const {product} = props;
    
    const realPrice = product.price.toLocaleString("pt-br", {style: 'currency', currency: "BRL"})
    return(
        <>        
        <Container>
            <Image src={product.image} alt="Product picture"></Image>           
            <ProductName>{product.name}</ProductName>
            <Price>{realPrice}</Price>
            <Buy>Comprar</Buy>
        </Container>        
        </>
    )
}
const Container = styled.div`
width: 12.5em;
height: 22em;
text-align: center;
margin: 0 1em 1em 1em;
`
const Image = styled.img`
width:100%;
height: 11em;
background-color: #fff;
border-radius: 0.31em;
margin-bottom: .5em;
cursor: pointer;
`
const ProductName = styled.p`
width: 100%;
height: 5em;
color: #fff;
font-size: .8em;
line-height: 1.5;
cursor: pointer;
`
const Price = styled.p`
width: 100%;
height: 2em;
color: #fff;
font-size: 1em;
line-height: 1.5;
font-weight: 700;
`
const Buy = styled.button`
width: 70%;
height: 2.5em;
background: ${mainGrey};
border: 2px solid #fff;
border-radius: 50px;
font-family: 'Poppins';
font-weight: 900;
font-size: 16px;
letter-spacing: 0.05em;
color: #ffffff;
cursor: pointer;
text-transform: uppercase;
&:active{
    background: ${mainPink};
}
`
