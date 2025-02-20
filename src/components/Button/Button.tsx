import React from "react";
import {Button as AriaButton} from 'react-aria-components';
import "./Button.scss";

type ButtonAppearance = 'flat' | 'outlined' | 'solid' | 'transparent' | 'white' | 'hollow';
type ButtonColor = 'neutral' | 'interactive' | 'favorite' | 'negative';
type ButtonShape = 'square' | 'circle';
type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type ButtonWidth = 'auto' | 'half' | 'third' | 'full';
type ButtonBrightness = 'light' | 'dark';

type ButtonProps = {
  label: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick: () => void;
  appearance?: ButtonAppearance;
  color?: ButtonColor;
  shape?: ButtonShape;
  size?: ButtonSize;
  width?: ButtonWidth;
  brightness?: ButtonBrightness;
};

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  leading, 
  trailing, 
  onClick,
  appearance = 'flat',
  color = 'neutral',
  shape = 'square',
  size = 'm',
  width = 'auto',
  brightness = 'light'
}) => {
  const classNames = [
    'in-button',
    `-appearance-${appearance}`,
    `-color-${color}`,
    `-shape-${shape}`,
    `-size-${size}`,
    `-width-${width}`,
    `-brightness-${brightness}`
  ].join(' ');

  return (
    <AriaButton className={classNames} onPress={onClick}>
      {leading && <div className="_leading">{leading}</div>}
      <div className="_body">{label}</div>
      {trailing && <div className="_trailing">{trailing}</div>}
    </AriaButton>
  );
};

export type { 
  ButtonAppearance, 
  ButtonColor, 
  ButtonShape, 
  ButtonSize, 
  ButtonWidth,
  ButtonBrightness,
  ButtonProps 
};
