// src/Home.js
import { useState } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Switch,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';

const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDateTime, setTaskDateTime] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName && taskDateTime) {
      setTasks([...tasks, { name: taskName, dateTime: taskDateTime, completed: false }]);
      setTaskName('');
      setTaskDateTime('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h5">Tarefas</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Nome da tarefa"
        />
        <TextField
          value={taskDateTime}
          onChange={(e) => setTaskDateTime(e.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Data/Hora"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Adicionar Tarefa
        </Button>
      </form>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task.name} secondary={task.dateTime} />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    color="primary"
                  />
                }
                label={task.completed ? "Concluído" : "Pendente"}
              />
            </FormGroup>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
