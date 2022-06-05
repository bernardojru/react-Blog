import { useState, useEffect } from "react";
import {
  FormContainer,
  Form,
  InputContainer,
  Button,
  Error,
} from "./RegisterStyle";

import { useAuthentication } from "../../hooks/useAuthentication";

export function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }

    const res = await createUser(user);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <FormContainer>
      <h2>Cadastre-se para postar</h2>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </InputContainer>
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
        <InputContainer>
          <label>Confirme a senha:</label>
          <input
            type="password"
            placeholder="Confirme a password do usuário"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputContainer>
        {!loading && <Button>Cadastrar</Button>}
        {loading && <Button disabled>Aguarde...</Button>}
        {error && <Error>{error}</Error>}
      </Form>
    </FormContainer>
  );
}
