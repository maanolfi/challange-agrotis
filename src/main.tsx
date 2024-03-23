import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack';
import BrowserRouter from './BrowserRouter'
import CssBaseline from '@mui/material/CssBaseline';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import WarningSharpIcon from '@mui/icons-material/WarningSharp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter />
    <SnackbarProvider
      maxSnack={1}
      iconVariant={{
        success: <CheckSharpIcon fontSize='small' style={{ marginRight: 8 }} />,
        error: <WarningSharpIcon fontSize='small' style={{ marginRight: 8 }} />,
      }} />
  </React.StrictMode>,
)
