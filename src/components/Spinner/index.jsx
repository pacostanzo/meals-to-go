import React from 'react';
import { LoadingIndicator, SpinnerContainer } from './Spinner.styles';

export const Spinner = (props) => (
  <SpinnerContainer>
    <LoadingIndicator {...props} />
  </SpinnerContainer>
);
