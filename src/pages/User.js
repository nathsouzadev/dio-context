import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../context/globalState';

import {
  Button,
  Stack,
  Box,
  Typography,
  Container
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function User() {
  const history = useHistory();
  const { state } = useContext(GlobalContext);
  !state.login && history.push('/');

  return (
    <ThemeProvider theme={theme}>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Context API
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Construindo uma aplicação com Context API do React e entendendo como funciona o controle de um estado global em uma aplicação SPA
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Trocar tema</Button>
              <Button variant="outlined">Logout</Button>
            </Stack>
          </Container>
        </Box>
    </ThemeProvider>
  );
}
