import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectTest = (state: RootState) => state.test;

export const selectIsTest = createSelector(selectTest, (item) => {
  return item?.isLoading;
});
