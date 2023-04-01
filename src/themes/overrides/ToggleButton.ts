import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material';
import { ColorSchema } from '../../types/theme';

// ----------------------------------------------------------------------

export default function ToggleButton(theme: Theme) {
  const style = (color: ColorSchema) => ({
    props: { color },
    style: {
      '&:hover': {
        borderColor: alpha(theme.palette[color].main, 0.48),
        backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      },
      '&.Mui-selected': {
        borderColor: alpha(theme.palette[color].main, 0.48)
      }
    }
  });

  return {
    MuiToggleButton: {
      variants: [
        {
          props: { color: 'standard' },
          style: {
            '&.Mui-selected': {
              backgroundColor: theme.palette.action.selected
            }
          }
        },
        style('primary'),
        style('secondary'),
        style('info'),
        style('success'),
        style('warning'),
        style('error')
      ]
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
          '& .MuiToggleButton-root': {
            margin: 4,
            borderColor: 'transparent !important',
            borderRadius: `${theme.shape.borderRadius}px !important`
          }
        }
      }
    }
  };
}
