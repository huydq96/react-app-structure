import React, { ReactNode } from 'react';
import { mapClassModifiers } from 'utils';

type ButtonProps = {
  children: ReactNode;
  type?:
    | 'primary'
    | 'primary-outline'
    | 'primary-gray'
    | 'secondary'
    | 'secondary-outline'
    | 'secondary-gray';
  href?: string;
  isDisabled?: boolean;
  isTargetBlank?: boolean;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  href,
  isDisabled,
  isTargetBlank,
  onClick,
  className,
}) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      className={[
        mapClassModifiers('a-button', `type-${type}`),
        className,
      ].join(' ')}
      href={href}
      disabled={isDisabled}
      target={isTargetBlank ? '_blank' : ''}
      rel={isTargetBlank ? 'noopener noreferrer' : ''}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

Button.defaultProps = {
  type: 'primary',
  isDisabled: false,
  isTargetBlank: false,
};
