import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from "@mui/material/styles";
import './App.css';

import NavBar from './components/NavBar';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#263238', // NavBar background color
      contrastText: '#fff', // NavBar text color
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: '10px',
          //backgroundColor: '#ff7961',
          textTransform: 'none',
          fontFamily: 'Barlow',
          fontWeight: 'bold',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ScrollButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
