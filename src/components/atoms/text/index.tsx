import React, { ReactNode } from 'react';
import { mapClassModifiers } from 'utils';

type TextProps = {
  children: ReactNode;
  size?: number;
  letterSpacing?: 'narrow' | 'regular';
  color?: string;
  tagType?: 'h1' | 'h2' | 'span' | 'p';
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  size,
  letterSpacing,
  color,
  tagType,
  className,
}) => {
  const TagType = tagType ?? 'p';
  return (
    <TagType
      className={[
        mapClassModifiers(
          'a-text',
          size ? `size-${size}` : undefined,
          letterSpacing ? `letter-spacing-${letterSpacing}` : undefined,
          color ? `color-${color}` : undefined,
        ),
        className,
      ].join(' ')}
    >
      {children}
    </TagType>
  );
};
