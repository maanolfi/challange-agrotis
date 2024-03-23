import { ChangeEvent, MouseEvent } from 'react';
import { enqueueSnackbar, closeSnackbar  } from 'notistack';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useFormStore } from '../../store/useFormStore';

dayjs.extend(utc);

const useForm = () => {
    const {
        name,
        observation,
        date_start,
        date_end,
        properties,
        laboratory,
        onChangeState,
        onChangeError
    }: any = useFormStore();

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'observation' && value.length <= 1000) {
            onChangeState({ name, value });
        } else if (name === 'name' && value.length <= 40) {
            onChangeState({ name, value });
        } else {
            onChangeState({ name, value });
        }
    };

    const onChangeSelect = (data: any) => {
        const { name, value } = data;
        onChangeState({ name, value });
    };

    const validDates = (start: string, end: string) => {
        const primeiraData = dayjs(start);
        const segundaData = dayjs(end);
        if (segundaData.isBefore(primeiraData)) {
            onChangeError({ date_end: 'A primeira data é menor que a segunda.' });
            return false;
        } else {
            onChangeError({ date_end: null });
            return true;
        }
    };

    const onChangeInputDate = (data: any) => {
        const { name, value } = data;
        const formated = dayjs(value).utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
        let newData = { date_start, date_end, [name]: formated };
        validDates(newData.date_start, newData.date_end);
        onChangeState({ name, value: formated });
    };

    const formValid = (data: any) => {
        const {
            nome,
            dataInicial,
            dataFinal,
            infosPropriedade,
            laboratorio,
        } = data;
        let valid = true;
        let errors: any = {
            name: '',
            date_start: '',
            date_end: '',
            properties: '',
            laboratory: ''
        };

        const text_error = 'Error';
        if (nome.length === 0) {
            errors.name = text_error;
            valid = false;
        }
        if (!dataInicial || dataInicial.length === 0) {
            errors.date_start = text_error;
            valid = false;
        }
        if (!dataFinal || dataFinal.length === 0) {
            errors.date_end = text_error;
            valid = false;
        }
        if (!infosPropriedade.id) {
            errors.properties = text_error;
            valid = false;
        }
        if (!laboratorio.id) {
            errors.laboratory = text_error;
            valid = false;
        }
        if (dataInicial && dataFinal && !validDates(dataInicial, dataFinal)) {
            errors.date_end = text_error;
            valid = false;
        }

        onChangeError(errors);
        return valid;
    };

    const getParameters = () => {
        const data = {
            nome: name,
            dataInicial: date_start,
            dataFinal: date_end,
            infosPropriedade: {
                id: properties.id,
                nome: properties.nome
            },
            cnpj: properties.cnpj,
            laboratorio: laboratory,
            observacoes: observation
        };
        return data;
    };

    const onSubmitForm = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = getParameters();
        if (formValid(data)) {
            enqueueSnackbar('Cadastro realizado com sucesso!', {
                variant: "success",
                preventDuplicate: true,
                anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                persist: true,
                action: (key: any) => (
                    <Button color="inherit" onClick={() => closeSnackbar(key)}>
                        <CloseIcon fontSize='small' />
                    </Button>
                )
            });
            console.log('Response forms:', data);
        } else {
            enqueueSnackbar('Preencha os campos obrigatórios.', {
                variant: "error",
                preventDuplicate: true,
                anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                persist: true,
                action: (key: any) => (
                    <Button color="inherit" onClick={() => closeSnackbar(key)}>
                        <CloseIcon fontSize='small' />
                    </Button>
                )
            });
        }
    };

    return {
        onChangeInput,
        onChangeInputDate,
        onChangeSelect,
        onSubmitForm,
    };
};

export default useForm;
