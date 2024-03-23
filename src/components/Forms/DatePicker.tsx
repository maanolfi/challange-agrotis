import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormHelperText, Box } from '@mui/material';
import useForm from './useForm';
import { useFormStore } from '../../store/useFormStore';

export default function CommonlyUsedComponents({ label = '', name_input = '' }) {
  const { onChangeInputDate }: any = useForm()
  const { error_fields }: any = useFormStore()
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          slotProps={{
            textField: {
              variant: "standard",
              fullWidth: true,
              required: true,
              error: Boolean(error_fields[name_input]),
            }
          }}
          onChange={data => onChangeInputDate({ name: name_input, value: data })}
        />
     
      {error_fields[name_input] && <FormHelperText error={Boolean(error_fields[name_input])}>
        {error_fields[name_input]}
      </FormHelperText>}
      {
        name_input === "date_end" && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <FormHelperText>Info</FormHelperText>
          </Box>
        )
      }
    </LocalizationProvider>
  );
}
