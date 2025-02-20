import React from "react";
import {Button as AriaButton} from 'react-aria-components';
import "./Button.scss";

type ButtonProps = {
  label: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, leading, trailing, onClick }) => {
  return (
    <AriaButton className="in-button" onPress={onClick}>
      <div className="_leading">{leading}</div>
      <div className="_body">{label}</div>
      <div className="_trailing">{trailing}</div>
    </AriaButton>
  );
};
