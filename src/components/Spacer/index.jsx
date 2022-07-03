import React from 'react';
import { space } from '../../infrastructure/theme/Spacing';
import { SpacerView } from './Spacer.styles';

const sizeVariant = {
  small: space.X_SMALL,
  medium: space.SMALL,
  large: space.MEDIUM,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size) => {
  const property = positionVariant[position];
  const value = sizeVariant[size];

  return `${property}:${value}`;
};

export const Spacer = ({ position, size, children }) => {
  const variant = getVariant(position, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
