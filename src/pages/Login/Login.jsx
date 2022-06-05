import { useState, useEffect } from "react";
import {
  FormContainer,
  Form,
  InputContainer,
  Button,
  Error,
} from "./loginStyle";

import { useAuthentication } from "../../hooks/useAuthentication";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading, login } = useAuthentication();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };
    const res = await login(user);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <FormContainer>
      <h2>Entrar</h2>
      <p>Faça o login para poder utilizar o sistema</p>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Password do usuário"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputContainer>
        {!loading && <Button>Entrar</Button>}
        {loading && <Button disabled>Aguarde...</Button>}
        {error && <Error>{error}</Error>}
      </Form>
    </FormContainer>
  );
}
