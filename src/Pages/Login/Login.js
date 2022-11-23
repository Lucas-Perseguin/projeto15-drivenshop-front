import { useState } from "react";
import styled from "styled-components";
import Anchor from "../../Components/Forms/Anchor/Anchor";
import Button from "../../Components/Forms/Button/Button";
import Input from "../../Components/Forms/Input/Input";
import InputGroup from "../../Components/Forms/Input/InputGroup";
import Label from "../../Components/Forms/Input/Label";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 450px;
  padding: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  gap: 25px;
  @media (min-width: 900px) {
    padding: 30px 60px 60px 60px;
  }
`;

const Tittle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  letter-spacing: 0.05em;
  color: #2c2c2c;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("VERIFICANDO DADOS: ", formValues);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Tittle>LOGIN</Tittle>
        <Inputs>
          <InputGroup>
            <Label>EMAIL</Label>
            <Input
              type="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </InputGroup>
          <InputGroup>
            <Label>SENHA</Label>
            <Input
              type="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </InputGroup>
        </Inputs>
        <Button>ENTRAR</Button>
        <Anchor to="/">NÃO POSSUI UMA CONTA?</Anchor>
      </Form>
    </Container>
  );
}
