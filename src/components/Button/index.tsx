import React from "react";

type Props = {
  label: string;
  handleClick: () => void;
};

const Button = ({ label, handleClick }: Props) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
