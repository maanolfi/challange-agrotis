import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
    return (
        <Box id="hero">
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 2, sm: 6 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{

                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Bem-vindo ao teste para a vaga
                        <Link href='https://agrotis.gupy.io/jobs/6784050?jobBoardSource=gupy_opportunities'>
                            <Typography
                                component="span"
                                variant="h1"
                                sx={{
                                    fontSize: 'clamp(3rem, 10vw, 4rem)',
                                    color: (theme) =>
                                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                }}
                            >
                                {` Desenvolvedor(a) Front End React`}
                            </Typography>
                        </Link>
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', marginTop: { sm: 8, md: 4 }, width: { sm: '100%', md: '80%' } }}
                    >
                        Projeto iniciado com <Link href='https://vitejs.dev/guide'>Vitejs React</Link>,
                        para estilização foi utilizado a style guide <Link href='https://mui.com/material-ui/getting-started'>Material UI Core v5</Link>,
                        para exemplo de uso de Redux, o <Link href='https://github.com/pmndrs/zustand'>zustand</Link> foi utlizado, mas eu poderia ter usado ContextApi, Redux com Sagas ou Thunk.
                        No geral uso mínimo de bibliotecas externas e melhores praticas de desenvolvimento.
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        React.js versão 18.2 - Node.js versão 16.20 *Caso precise utilizar outra versão do node.js recomendo usar o
                        <Link href="https://github.com/nvm-sh/nvm"> nvm</Link>.
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Para rodar localmente em sua máquina, deve-se clonar o projeto no github Maanolfi, em seguida acessar a pasta e rodar os comandos:
                    </Typography>

                    <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                        npm install ou yarn
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >depois pode utilizar: </Typography>
                    <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                        npm run dev ou yarn dev
                    </Typography>
                </Stack>

            </Container>
        </Box>
    );
}