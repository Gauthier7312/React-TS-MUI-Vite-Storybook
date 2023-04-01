import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const RootStyleCategoryHomeContentStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 0, ${theme.palette.primary.dark} 90%)`,
  width: '100%',
  color: 'white'
}));

export const RootStyleLoginPage = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
  width: '100%',
  overflow: 'hidden'
}));

export const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: '0 0 1px 0 transparent',
  height: 50,
  zIndex: theme.zIndex.appBar + 1,
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('lg')]: {
    height: 50
  }
}));
