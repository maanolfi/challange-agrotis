import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Typography, Box, IconButton } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { useFetch } from '../../services/useFecth';
import useForm from './useForm';
import { useFormStore } from '../../store/useFormStore';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

interface Item {
    id: string;
    nome: string;
    cnpj?: string | null;
}

interface FetchProps {
    data: Item[];
    isFetching: boolean;
    error: any;
}

export default function SelectCustom({ url = "", label = "", name_field = "" }) {
    const { data, isFetching, error }: FetchProps = useFetch(url);
    const { onChangeSelect }: any = useForm()
    const { error_fields, resetSelectState, ...rest }: any = useFormStore()

    const handleChange = (event: SelectChangeEvent) => {
        const id = event.target.value;
        const item = data.find((i: Item) => i.id === id);
        if (item) onChangeSelect({ name: name_field, value: item });
    };

    const getValueById = (id: any) => {
        const value = data.find(i => i.id === id)
        if (value) {
            return value
        } else {
            return { nome: "" }
        }
    }

    if (error || !data) {
        return (
            <div>
                Error ao buscar os dados
            </div>
        );
    }

    return (
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="select-label">
                {label}
            </InputLabel>

            <Select
                labelId="select-label"
                id="select-standard"
                value={rest[name_field].id}
                onChange={handleChange}
                label={label}
                disabled={Boolean(isFetching)}
                error={Boolean(error_fields[name_field])}
                renderValue={(value: any) => {
                    const item = getValueById(value);
                    return (
                        <Box
                            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: 'relative' }}
                        >
                            <Typography noWrap>{Boolean(item.nome) ? item.nome : ""}</Typography>
                            <IconButton onClick={evt => {
                                evt.preventDefault()
                                resetSelectState(name_field)
                            }}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1500,
                                    right: 0
                                }}>
                                <CloseSharpIcon fontSize='small' />
                            </IconButton>
                        </Box>
                    );
                }}
            >
                {data.map((item: Item) => (
                    <MenuItem
                        key={item.id}
                        value={item.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                        }}
                    >
                        {item.nome}
                        {item.cnpj && (
                            <Typography variant='caption'>
                                CNPJ {item.cnpj}
                            </Typography>
                        )}
                    </MenuItem>
                ))}
            </Select>

            {error_fields[name_field] ? (
                <FormHelperText error>{error_fields[name_field]}</FormHelperText>
            ) : (
                <>
                    {rest[name_field].cnpj && (
                        <FormHelperText>CNPJ {rest[name_field].cnpj}</FormHelperText>
                    )}
                </>
            )}
        </FormControl>

    );
}
