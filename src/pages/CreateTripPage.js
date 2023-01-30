import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { navigateToAdmin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const [form, setForm] = useState({
    nome: "",
    planeta: "",
    data: "",
    descricao: "",
    duracao: ""
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate(); //hook do react-router-dom que faz a navegação entre páginas
  const login = () => {
    //pega as informações dos inputs controlados e envia para a API
    const body = {
      email: form.email,
      password: form.senha
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/login",
        body
      )
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token); //envia o tokem para o localStorage
        navigateToAdmin(navigate); // função que usa o navigate para levar o usuário diretamente para a página do admin
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    login();
  };
  return (
    <FormContainer>
      <h1>Criar Viagem</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="nome">Nome</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
          placeholder="Nome da Viagem"
          required
        />
        <label htmlFor="planeta">Planeta</label>
        <Input
          id="planeta"
          name="planeta"
          value={form.planeta}
          onChange={onChange}
          placeholder="Planeta"
          required
        />
        <label htmlFor="data">Data</label>
        <Input
          id="data"
          name="data"
          type="date"
          value={form.data}
          onChange={onChange}
          placeholder="data"
          required
        />
        <label htmlFor="descricao">Descricao</label>
        <Input
          id="descricao"
          name="descricao"
          value={form.descricao}
          onChange={onChange}
          placeholder="Descrição da viagem: ao menos 30 caracteres"
          pattern="/^([A-Za-z]\s?){30,300}$/g"
          required
        />
        <label htmlFor="duracao">Duração</label>
        <Input
          id="duracao"
          name="duracao"
          type="number"
          value={form.duracao}
          onChange={onChange}
          placeholder="Duração da viagem em dias"
          required
        />
        <LoginButton>Criar Viagem </LoginButton>
      </Form>
    </FormContainer>
  );
}

export default CreateTripPage;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 5px;
`;
const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Input = styled.input`
  padding: 15px;
`;
const LoginButton = styled.button`
  padding: 15px;
  background-color: blueviolet;
  border: none;
  color: white;
`;
