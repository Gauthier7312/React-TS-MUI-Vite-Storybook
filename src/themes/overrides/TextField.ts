import { alpha, Theme } from '@mui/material';
// ----------------------------------------------------------------------

export default function TextField(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontSize: 14,
          backgroundColor: '#E9EEEC',
          transition: theme.transitions.create(['box-shadow', 'width'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
          }),
          '&.Mui-focused': {
            boxShadow: theme.customShadows.z12
          }
        },
        '& fieldset': {
          borderWidth: `1px !important`,
          borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`
        }
      }
    }
  };
}
