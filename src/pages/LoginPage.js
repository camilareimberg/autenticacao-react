import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camilareimberg/login",
        form
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(form);
  };
  return (
    <FormContainer>
      <h1>Login Page</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="email">Login</label>
        <Input
          id="email"
          name="email"
          type="text"
          value={form.email}
          onChange={onChange}
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="senha">Senha</label>
        <Input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="senha"
          required
        />
        <LoginButton>Login</LoginButton>
      </Form>
    </FormContainer>
  );
}

export default LoginPage;
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
`;
