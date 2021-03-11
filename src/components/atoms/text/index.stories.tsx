import React from 'react';
import { Text } from 'components/atoms';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/a-text',
  decorators: [withKnobs],
};

export const normal = () => {
  const children = text('text', 'Sample text');
  const sizeSelector = number('Size', 12);
  const colorSelector = select(
    'Color',
    {
      Black: undefined,
      Red: 'red',
      Pink: 'pink',
      Navy: 'navy',
    },
    undefined,
  );
  const tagTypeSelector = select(
    'TagType',
    {
      p: undefined,
      h1: 'h1',
      h2: 'h2',
      span: 'span',
    },
    undefined,
  );

  return (
    <Text size={sizeSelector} color={colorSelector} tagType={tagTypeSelector}>
      {children}
    </Text>
  );
};
