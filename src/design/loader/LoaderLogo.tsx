import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object
};

export default function Logo({ disabledLink = true, sx }: any) {
  const logo = <Iconify icon={'line-md:loading-twotone-loop'} width={70} height={70} />;

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
