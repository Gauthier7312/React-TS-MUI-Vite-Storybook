import { alpha, Theme } from '@mui/material';

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },

      variants: [
        {
          props: { variant: 'outlined' },
          style: { borderColor: alpha(theme.palette.grey[500], 0.12) }
        }
      ],

      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  };
}
