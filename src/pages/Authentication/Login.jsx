import { useState } from "react";
import { Button, TextField, Container, Typography } from "@material-ui/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuário logado com sucesso:", user.uid);
      navigate("/");
    } catch (error) {
      console.error("Erro no login:", error.message);
      // Você pode querer mostrar uma mensagem amigável ao usuário aqui
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h5">Login</Typography>
        <form noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Logar
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            href={"/registrar"}
            style={{ marginTop: "10px" }}
          >
            Registrar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
