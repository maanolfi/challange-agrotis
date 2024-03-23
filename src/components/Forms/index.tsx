import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import FormHelperText from '@mui/material/FormHelperText';
import { Box } from '@mui/material';
import FormHelperTextCustom from './FormHelperTextCustom'
import DatePicker from './DatePicker'
import SelectCustom from './SelectCustom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useForm from './useForm';
import { useFormStore } from '../../store/useFormStore';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const theme = createTheme({
    palette: {
        primary: { main: "rgba(0, 121, 107, 1)" }
    },
});

export default function FormsRoot() {
    const { onChangeInput } = useForm()
    const { name, observation, error_fields }: any = useFormStore()

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} sx={{ padding: 2 }}>
                <FormGrid item xs={12} md={6}>
                    <TextField
                        name="name"
                        label="Nome"
                        variant="standard"
                        required
                        onChange={onChangeInput}
                        value={name}
                        error={Boolean(error_fields.name)}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {Boolean(error_fields.name) ? <FormHelperTextCustom /> : <div />}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <FormHelperText>{`${name.length}/40`}</FormHelperText>
                        </Box>
                    </Box>
                </FormGrid>

                <FormGrid item xs={12} md={3}>
                    <DatePicker label="Data inicial" name_input='date_start' />
                </FormGrid>
                <FormGrid item xs={12} md={3}>
                    <DatePicker label="Data final" name_input='date_end' />
                </FormGrid>

                <FormGrid item xs={12} md={6}>
                    <SelectCustom
                        label="Propriedades"
                        url="propriedades.json"
                        name_field='properties'
                    />
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <SelectCustom
                        label="Laboratório"
                        url="laboratorios.json"
                        name_field='laboratory'
                    />
                </FormGrid>
                <FormGrid item xs={12}>
                    <TextField
                        name="observation"
                        label="Observações"
                        multiline
                        rows={4}
                        variant="standard"
                        onChange={onChangeInput}
                        value={observation}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <FormHelperText>{`${observation.length}/1000`}</FormHelperText>
                    </Box>
                </FormGrid>
            </Grid>
        </ThemeProvider>
    );
}