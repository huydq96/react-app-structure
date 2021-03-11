import React from 'react';
import { Button } from 'components/atoms';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/a-button',
  decorators: [withKnobs],
};

const onclick = action('clicked');

export const button = () => {
  const type = select(
    'Type',
    [
      'primary',
      'primary-outline',
      'primary-gray',
      'secondary',
      'secondary-outline',
      'secondary-gray',
    ],
    undefined,
  );
  const children = text('text', 'Sample button');
  const isDisabled = boolean('IsDisabled', false);

  return (
    <Button type={type} isDisabled={isDisabled} onClick={onclick}>
      {children}
    </Button>
  );
};

export const linkButton = () => {
  const type = select(
    'Type',
    [
      'primary',
      'primary-outline',
      'primary-gray',
      'secondary',
      'secondary-outline',
      'secondary-gray',
    ],
    undefined,
  );
  const children = text('text', 'Sample link button');
  const isDisabled = boolean('IsDisabled', false);

  return (
    <Button type={type} href="/" isDisabled={isDisabled}>
      {children}
    </Button>
  );
};
