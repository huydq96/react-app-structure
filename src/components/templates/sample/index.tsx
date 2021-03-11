import React from 'react';
import { Sample } from 'components/molecules';
import { FullLayout } from 'components/templates/layouts';

export const SampleTemplate: React.FC = () => {
  return (
    <FullLayout>
      <main className="t-sample">
        <Sample />
      </main>
    </FullLayout>
  );
};
