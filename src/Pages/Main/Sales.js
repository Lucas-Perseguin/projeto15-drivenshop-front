import styled from "styled-components";
import { mainPink } from "../../constants"

import {useState, useEffect} from "react";

export default function Sales(props) {
    const {products} = props;
    const [random, setRandom] = useState(0);
    
    const sales = products.filter(product =>(product.sale === true))
    useEffect(() => {
        setTimeout(()=>{
            setRandom(parseInt(Math.random() * ((sales.length - 3) + 1)));
            }, 5000);     
    }, [random, sales.length]);    
    
    return (
        <>
             <SaleLine>Ofertas</SaleLine>
            <Title>Categorias Especiais</Title>  
            <ContainerBoxes>
                <Box1  src={sales[random].image}/>
                <MiniBoxes>
                    <Box2 src={sales[random + 1].image} />
                    <Box3  src={sales[random + 2].image}/>
                </MiniBoxes>
            </ContainerBoxes>
        </>
    )
}
const SaleLine = styled.div`
width: 100%;
height: 3em;
background-color: ${mainPink};
color: #fff;
font-size: 3em;
font-weight: 900;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
margin-bottom: 1em;
`
const Title =styled.h1`
font-size: 1.5em;
text-transform: uppercase;
color: #fff;
font-weight: 900;
margin-bottom: 1em;
`

const ContainerBoxes = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const Box1 = styled.img`
width: 65%;
height: 50em;
background-color: #d9d9d9;
margin-right: 3em;
border-radius: .61em;
@media(max-width: 50em){    
    width: 100%;
    margin: 0;
 }

`
const MiniBoxes = styled.div`
width: 25%;
@media(max-width: 50em){    
   display: none;
}
`
const Box2 = styled.img`
width: 100%;
height: 23em;
background-color: #d9d9d9;
border-radius: .61em;
margin-bottom: 4em;
`
const Box3 = styled(Box2)`
`   