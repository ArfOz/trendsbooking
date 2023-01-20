import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
<<<<<<< HEAD
import {ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
=======
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
>>>>>>> d162cd9259afb3f397b2a64adfcee7d05542e701

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        {/* <App /> */}
        <ThemeProvider theme={theme}>
            <CssBaseline />
<<<<<<< HEAD
            <App />
=======
                <App />
>>>>>>> d162cd9259afb3f397b2a64adfcee7d05542e701
        </ThemeProvider>
    </StrictMode>,
);
