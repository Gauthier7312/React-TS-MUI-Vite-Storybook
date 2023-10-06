import { Toaster, ToastBar, toast } from 'react-hot-toast';
import { Icon, IconifyIcon } from '@iconify/react';
import infoFill from '@iconify/icons-eva/info-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';
// material
import { Theme, alpha, useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
// @types
import { ColorSchema } from '../types/theme';

// ----------------------------------------------------------------------

type ToasterIconProps = {
  icon: IconifyIcon;
  color: ColorSchema;
};

function ToasterIcon({ icon, color }: ToasterIconProps) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme: Theme) => alpha(theme.palette[color].main, 0.16)
      }}
    >
      <Icon icon={icon} width={24} height={24} />
    </Box>
  );
}

export default function ToastProvider() {
  const theme = useTheme();
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: 14,
            padding: theme.spacing(1.5),
            margin: theme.spacing(0.25, 0),
            color: theme.palette.text.primary,
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            background: theme.palette.background.paper,
            fontWeight: theme.typography.fontWeightRegular
          },
          success: {
            icon: <ToasterIcon icon={checkmarkCircle2Fill} color="success" />
          },
          error: {
            icon: <ToasterIcon icon={infoFill} color="error" />
          }
        }}
      >
        {(t: any) => (
          <ToastBar toast={t}>
            {({ icon, message }: any) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <Button
                    sx={{ '&:hover': { background: 'transparent' } }}
                    color="inherit"
                    size="small"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <Icon icon={closeFill} />
                  </Button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </>
  );
}
