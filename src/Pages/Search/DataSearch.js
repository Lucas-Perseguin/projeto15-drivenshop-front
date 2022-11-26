import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function DataSearch(props){
    const {product} = props;
    const navigate = useNavigate();
    
    const realPrice = product.price.toLocaleString("pt-br", {style: 'currency', currency: "BRL"})
    return(
        <>        
        <Container>
            <Image src={product.image} alt="Product picture"></Image>           
            <ProductName>{product.name}</ProductName>
            <Price>{realPrice}</Price>
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
