import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const number = data.get("number");
    const email = data.get("email");
    console.log({
      name: data.get("name"),
      number: data.get("number"),
      email: data.get("email"),
    });
    if (name && number && email) {
      localStorage.setItem(
        "data",
        JSON.stringify({
          name,
          number,
          email,
        })
      );

      // Navigate to the next page (replace "/next-page" with the desired URL)
      navigate("/table");
    } else {
      // Navigate to the home page (replace "/" with the desired URL for the home page)
      navigate("/");
      alert("Invalid Input");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              type="text"
              label="Name"
              name="name"
              autoComplete="name"
              placeholder="Enter Your Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              placeholder="Enter Your Number"
              label="Number"
              type="number"
              id="number"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              placeholder="Enter Your Email"
              label="email"
              type="email"
              id="email"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Check
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
