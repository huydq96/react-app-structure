import React, { ReactNode } from 'react';

type FullLayoutProps = {
  children: ReactNode;
};

export const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
  return <div className="t-full-layout">{children}</div>;
};
