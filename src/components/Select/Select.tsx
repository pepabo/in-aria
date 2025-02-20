import React from "react";
import {Button,ListBox, ListBoxItem, Popover, Select as SelectBox, SelectValue} from 'react-aria-components';
import "./Select.scss";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const Select: React.FC<SelectProps> = ({
  options, 
  value, 
  onChange,
  placeholder
}) => {
  return (
    <SelectBox 
      className="selectbox"
      defaultSelectedKey={value}
      onSelectionChange={(selected) => onChange?.(selected.toString())}
      placeholder={placeholder}
    >
      <Button className="_select">
        <SelectValue  />
        <span aria-hidden="true" className="_icon"></span>
      </Button>
      <Popover className="dropdown">
        <ListBox className="_list">
          {options.map((option) => (
            <ListBoxItem key={option.value} id={option.value} className="_item">
              <div>
                <div className="_body">
                  <div className="_title">{option.label}</div>
                </div>
              </div>
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </SelectBox>    
  );
};
