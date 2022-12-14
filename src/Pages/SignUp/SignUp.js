import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Anchor from '../../Components/Forms/Anchor/Anchor';
import Button from '../../Components/Forms/Button/Button';
import Input from '../../Components/Forms/Input/Input';
import InputGroup from '../../Components/Forms/Input/InputGroup';
import Label from '../../Components/Forms/Input/Label';
import { isLoggedInContext } from '../../Context/isLoggedInContext';

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

const Title = styled.h1`
  font-family: 'Poppins';
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

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const tokenContext = useContext(isLoggedInContext);
  if (token) {
    alert('Para poder cadastrar um nova conta você deve estar deslogado!');
    navigate('/');
  }
  function handleSignUp(event) {
    event.preventDefault();
    if (!(name && email && cpf && password && confirmPassword)) {
      return alert('Preencha todos os campos!');
    }
    if (password !== confirmPassword) {
      return alert('As senhas devem ser iguais!');
    }
    const promisse = axios.post(
      `${process.env.REACT_APP_BACK_END_API_URI}/sign-up`,
      { name, email, cpf, password }
    );
    promisse.then((response) => {
      localStorage.setItem('token', `${response.data}`);
      tokenContext.setIsToken((prev) => true);
      navigate('/');
    });
    promisse.catch((error) => {
      return alert(`Erro: ${error.response.status}\n${error.response.message}`);
    });
  }
  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Title>CADASTRAR</Title>
        <Inputs>
          <InputGroup>
            <Label>NOME</Label>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>EMAIL</Label>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>CPF</Label>
            <Input
              type="text"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>SENHA</Label>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>CONFIRMAR SENHA</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </InputGroup>
        </Inputs>
        <Button>CRIAR</Button>
        <Anchor to="/login">JÁ POSSUI UMA CONTA?</Anchor>
      </Form>
    </Container>
  );
}
