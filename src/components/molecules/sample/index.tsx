import React from 'react';
import { Button, Text } from 'components/atoms';

export const Sample: React.FC = () => (
  <div className="m-sample">
    <Text size={18}>Sample Text</Text>
    <Button className="m-sample__button">Sample Button</Button>
  </div>
);
