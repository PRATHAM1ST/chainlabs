import React from 'react';
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Square button
   */
  square?: boolean;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  square = false,
  className = '',
  ...props
}: ButtonProps) => {
    const mode = primary
        ? 'text-primary-background bg-primary px-4 py-1'
        : 'text-primary border border-primary border-2 px-4 py-1';
    const modeSize = size == 'small' ? 'text-sm' : size == 'medium' ? 'text-xl' : 'text-2xl';
    const modeSquare = square ? 'text-xl text-primary h-8 w-8 px-0 py-0 leading-4' : '';
  return (
    <button
      type="button"
      className={twMerge(modeSize, mode, modeSquare, className)}
      {...props}
    >
      {label}
    </button>
  );
};
