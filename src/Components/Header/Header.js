import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MaxWidthContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d5d6da;
`;

const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
  position: relative;
  @media (min-width: 1200px) {
    max-width: 80%;
    height: 100px;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Header() {
  const [toggleSearch, setToggleSearch] = useState(true);

  return (
    <Container>
      <MaxWidthContainer>
        <ContainerHeader>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <IconGroup>
            <ion-icon
              style={{
                fontSize: "22px",
                color: "#FF4791",
                cursor: "pointer",
              }}
              name="search"
              onClick={() => {
                setToggleSearch((t) => !t);
              }}
            ></ion-icon>
            <Link to="/">
              <ion-icon
                style={{ fontSize: "22px", color: "#2c2c2c" }}
                name="cart"
              ></ion-icon>
            </Link>
            <Link to="/">
              <ion-icon
                style={{ fontSize: "22px", color: "#2c2c2c" }}
                name="person"
              ></ion-icon>
            </Link>
          </IconGroup>
        </ContainerHeader>
      </MaxWidthContainer>
      <SearchBar state={toggleSearch} />
    </Container>
  );
}
