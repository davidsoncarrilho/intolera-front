import React from 'react';

interface SwiperButtonProps {
  onClick?: () => void;
  label: string;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button: React.FC<SwiperButtonProps> = ({
  onClick,
  label,
  className = '',
  type = 'button',
  disabled = false,
}) => (
  <button
    onClick={onClick}
    className={`${className} my-5 w-full rounded-[4px] bg-primary/600 px-2 py-1 text-sm font-semibold text-white hover:bg-primary/700 disabled:bg-blue-300`}
    // eslint-disable-next-line react/button-has-type
    type={type}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.defaultProps = {
  className: '',
  type: 'button',
  disabled: false,
};

export default Button;
