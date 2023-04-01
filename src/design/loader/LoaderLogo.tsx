import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';
import logoSvg from '../assets/Icons/logo.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object
};

export default function Logo({ disabledLink = true, sx }: any) {
  const logo = (
    <Box component="img" src={logoSvg} alt={'logo'} sx={{ height: 120, width: 120, ...sx }} />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
