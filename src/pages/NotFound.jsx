// src/NotFound.js
import { Container, Typography, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Página não encontrada
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.history.back()}
      >
        Voltar
      </Button>
    </Container>
  );
};

export default NotFound;
