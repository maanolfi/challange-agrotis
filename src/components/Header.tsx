import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const logoStyle = {
    width: '74px',
    height: '14px',
    cursor: 'pointer'
};

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', height: 39.1 }} elevation={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100%" }}>
                    <Link to='/'>
                        <img src='/logo.svg' style={logoStyle} alt='Logo agrotis' />
                    </Link>
                </Box>
            </AppBar>
        </Box>
    );
}
