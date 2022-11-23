import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainPink, mainGrey } from '../../constants';

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
  color: ${mainGrey};
  font-weight: 800;
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
    justify-content: center;
    width: 450px;
    font-size: 14px;
    input {
      height: 40px;
      width: 100%;
      border: 1px solid black;
      border-radius: 4px;
      color: black;
      font-weight: 400;
      font-size: 18px;
    }
  }
  margin: 20px 0;
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
  margin-bottom: 10px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ToLoginButton = styled.button`
  color: lightgrey;
  border: none;
  background-color: white;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  :hover {
    color: grey;
    text-decoration: underline;
    cursor: pointer;
  }
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
              type="email"
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
