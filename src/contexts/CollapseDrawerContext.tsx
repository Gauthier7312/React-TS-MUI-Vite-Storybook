import { createContext, useState, useEffect } from 'react';
// material
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// type
import {
  CollapseDrawerContextProps,
  CollapseDrawerProviderProps
} from '../types/collapseDrawerProvider';

// ----------------------------------------------------------------------

const initialState: CollapseDrawerContextProps = {
  collapseClick: false,
  onToggleCollapse: () => {},
  onOpenCollapse: () => {},
  onHoverEnter: () => {},
  onHoverLeave: () => {}
};

const CollapseDrawerContext = createContext(initialState);

function CollapseDrawerProvider({ children }: CollapseDrawerProviderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const [collapse, setCollapse] = useState({
    click: true,
    hover: false
  });

  useEffect(() => {
    if (isMobile) {
      setCollapse({
        click: false,
        hover: false
      });
    }
  }, [isMobile]);

  const handleToggleCollapse = () => {
    setCollapse({ ...collapse, click: !collapse.click });
  };

  const handleOpenCollapse = () => {
    setCollapse({ ...collapse, click: true });
  };

  const handleHoverEnter = () => {
    if (collapse.click) {
      setCollapse({ ...collapse, hover: true });
    }
  };

  const handleHoverLeave = () => {
    setCollapse({ ...collapse, hover: false });
  };

  return (
    <CollapseDrawerContext.Provider
      value={{
        isCollapse: collapse.click,
        collapseClick: collapse.click,
        onToggleCollapse: handleToggleCollapse,
        onOpenCollapse: handleOpenCollapse,
        onHoverEnter: handleHoverEnter,
        onHoverLeave: handleHoverLeave
      }}
    >
      {children}
    </CollapseDrawerContext.Provider>
  );
}

export { CollapseDrawerProvider, CollapseDrawerContext };
