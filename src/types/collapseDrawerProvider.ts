import { ReactNode } from 'react';

export type CollapseDrawerContextProps = {
  isCollapse?: boolean;
  collapseClick: boolean;
  onToggleCollapse: VoidFunction;
  onOpenCollapse: VoidFunction;
  onHoverEnter: VoidFunction;
  onHoverLeave: VoidFunction;
};

export type CollapseDrawerProviderProps = {
  children: ReactNode;
};
