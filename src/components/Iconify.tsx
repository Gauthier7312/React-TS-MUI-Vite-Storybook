import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

type iconifyType = {
  icon: string | any;
  sx?: any;
  width?: string | number;
  height?: string | number;
};

export default function Iconify({ icon, sx, ...other }: iconifyType) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
