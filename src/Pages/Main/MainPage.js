import styled from "styled-components"
import { mainPink, mainGrey } from "../../constants"
import Item from "./Item"

export default function MainPage(){
    
    return(
        <Container>  
        <Title>Categorias</Title>     
        <Categories>  
                     
            <SmartPhones><Text>SmartPhones</Text></SmartPhones>             
            <Notebooks><Text>Notebooks</Text></Notebooks>            
            <Gadgets><Text>Gadgets</Text></Gadgets>
        </Categories>
        <LineSection>Uma Seleção Driven para você</LineSection>
        <Items>
            <Item/>
        </Items>
        <ContainerSales>
            <SaleLine>Ofertas</SaleLine>
            <Title>Categorias Especiais</Title>  
            <ContainerBoxes>
                <Box1></Box1>
                <MiniBoxes>
                    <Box2></Box2>
                    <Box3></Box3>
                </MiniBoxes>
            </ContainerBoxes>                       
        </ContainerSales>        
        </Container>
    )
}
const Container =styled.div`
text-align: center;
padding-top: 2.5em;
font-family: 'Poppins';
`
const Title =styled.h1`
font-size: 1.5em;
text-transform: uppercase;
color: #fff;
font-weight: 900;
margin-bottom: 1em;
`
const Categories = styled.div`
display: flex;
justify-content: center;
margin-bottom: 3em;
`
const SmartPhones = styled.div`
width: 16.6em; 
height: 15.6em;
background-image: url("https://www.showmetech.com.br/wp-content/uploads//2021/12/conheca-os-smartphones-mais-aguardados-para-2022-5.png");
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: bottom;
margin: 0 1em;
border-radius: .31em;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover {
    opacity: .5;     
}
`
const Notebooks = styled(SmartPhones)`
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrDNF14yJ46llQ_Owv1-J6zmoIHEt3OLGEw&usqp=CAU");
`
const Gadgets = styled(SmartPhones)`
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIQhg99XbODt3o8-eTghlixAfWY7kgfBkpw&usqp=CAU");
`
const Text = styled.p`
font-size: 1.5em;
text-transform: uppercase;
color: ${mainPink};
font-weight: 900;
margin-bottom: 1em;
background-color:${mainGrey};
border-radius: 5em;
padding: .5em;
`
const LineSection = styled.div`
width: 100%;
height: 2em;
display: flex;
justify-content: center;
align-items: center;
background-color: ${mainPink};
font-size: 1.5em;
text-transform: uppercase;
color: #fff;
font-weight: 900;
margin-bottom: 2em;
`
const Items = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap; 
`
const ContainerSales = styled.div`
`
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

const ContainerBoxes = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const Box1 = styled.div`
width: 65%;
height: 50em;
background-color: #d9d9d9;
margin-right: 3em;
border-radius: .61em;
background-image: url("https://www.showmetech.com.br/wp-content/uploads//2021/12/conheca-os-smartphones-mais-aguardados-para-2022-5.png");
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: bottom;
`
const MiniBoxes = styled.div`
width: 25%;
`
const Box2 = styled.div`
width: 100%;
height: 23em;
background-color: #d9d9d9;
border-radius: .61em;
margin-bottom: 4em;
background-image: url("https://www.showmetech.com.br/wp-content/uploads//2021/12/conheca-os-smartphones-mais-aguardados-para-2022-5.png");
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: bottom;
`
const Box3 = styled(Box2)`
`