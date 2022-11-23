import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainPink, mainGrey } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${mainGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpContainer = styled.div`
  width: 550px;
  height: 750px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    justify-content: center;
    width: 450px;
    input {
      width: 100%;
      border: 2px black;
      border-radius: 4px;
    }
  }
`;

const SignUpButton = styled.button`
  background-color: ${mainPink};
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const ToLoginButton = styled.button`
  color: lightgrey;
  border: none;
  background-color: none;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  function handleSignUp() {
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
      localStorage.setItem(response.data.token);
      navigate('/');
    });
    promisse.catch((error) => {
      return alert(`Erro: ${error.response.status}\n${error.response.message}`);
    });
  }
  return (
    <Container>
      <SignUpContainer>
        <h1>CADASTRAR</h1>
        <Form>
          <div>
            <h2>NOME</h2>
            <input
              type="text"
              placeholder="Insira seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div>
            <h2>EMAIL</h2>
            <input
              type="text"
              placeholder="Insira seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div>
            <h2>CPF</h2>
            <input
              type="text"
              placeholder="Insira seu cpf"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            ></input>
          </div>
          <div>
            <h2>SENHA</h2>
            <input
              type="text"
              placeholder="Insira sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div>
            <h2>CONFIRMAR SENHA</h2>
            <input
              type="text"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></input>
          </div>
        </Form>
        <SignUpButton onClick={handleSignUp}>CRIAR</SignUpButton>
        <ToLoginButton onClick={() => navigate('/login')}>
          JA POSSUI UMA CONTA?
        </ToLoginButton>
      </SignUpContainer>
    </Container>
  );
}
