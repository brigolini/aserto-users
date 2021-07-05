import React from 'react';

interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = ({onClick, children}) => {
  return <button
    type="button"
    className="bg-blue-700 rounded text-white text-sm w-full px-8 py-1"
    onClick={onClick}>
    {children}
  </button>
}

export default Button;
