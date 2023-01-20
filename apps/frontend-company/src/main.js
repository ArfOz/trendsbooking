import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        {/* <App /> */}
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <App />
        </ThemeProvider>
    </StrictMode>,
);
