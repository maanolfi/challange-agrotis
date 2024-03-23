import FormHelperText from '@mui/material/FormHelperText';
import WarningSharpIcon from '@mui/icons-material/WarningSharp';
import { styled } from '@mui/system';

const FormHelper = styled(FormHelperText)(() => ({
    display: 'flex',
    alignItems: 'center',
    "& svg": {
        width: 16,
        height: 16
    }
}));

export default function FormHelperTextCustom({text = "Error"}) {
    return (
    <FormHelper error>
        <WarningSharpIcon fontSize='small' style={{ marginRight: 8 }} /> 
        {text}
    </FormHelper>
    )
}