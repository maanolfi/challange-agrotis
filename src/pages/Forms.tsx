import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Header from '../components/Header';
import FormsRoot from '../components/Forms';
import useForm from '../components/Forms/useForm';
export default function FormsPage() {
    const { onSubmitForm } = useForm()
    return (
        <>
            <Header />
            <Grid
                container
                sx={{
                    backgroundColor: 'rgba(243, 242, 241, 1)',
                    height: { xs: '100%', md: 'calc(100vh - 40px)' },
                    paddingTop: '32.9px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    paddingBottom: { xs: '24px', md: 0 }
                }}>
                <Box sx={{ width: '100%', backgroundColor: 'white', height: 'fit-content' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: "rgba(0, 121, 107, 1)",
                        color: "white",
                        padding: "10px 16px"
                    }}>
                        <Typography component='h3' variant='body1' style={{ fontSize: 20, fontWeight: 500 }}>
                            Teste front-end
                        </Typography>
                        <Button
                            variant="text"
                            style={{ color: "white", fontWeight: 500 }}
                            onClick={onSubmitForm}
                        >Salvar</Button>
                    </Box>
                    <FormsRoot />
                </Box>
            </Grid>
        </>
    );
}