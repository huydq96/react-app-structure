import React from 'react';
import { Sample } from 'components/molecules';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Molecules/m-sample',
  decorators: [withKnobs],
};

export const sample = () => {
  return <Sample />;
};
