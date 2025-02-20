import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import type { 
  ButtonAppearance, 
  ButtonColor, 
  ButtonShape, 
  ButtonSize, 
  ButtonWidth,
  ButtonBrightness 
} from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    appearance: {
      control: 'select',
      options: ['filled', 'outlined', 'flat'],
      description: 'ボタンの外観スタイル'
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'danger'],
      description: 'ボタンの色'
    },
    shape: {
      control: 'select',
      options: ['rectangle', 'pill'],
      description: 'ボタンの形状'
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
      description: 'ボタンのサイズ'
    },
    width: {
      control: 'select',
      options: ['auto', 'half', 'full'],
      description: 'ボタンの幅'
    },
    brightness: {
      control: 'select',
      options: ['light', 'dark'],
      description: '明るさ'
    },
    label: {
      control: 'text',
      description: 'ボタンのラベル'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

const APPEARANCES = ['flat', 'outlined', 'solid', 'transparent', 'white', 'hollow'] as const;
const COLORS = ['neutral', 'interactive', 'favorite', 'negative'] as const;
const SHAPES = ['square', 'circle'] as const;
const SIZES = ['xs', 's', 'm', 'l', 'xl'] as const;
const WIDTHS = ['auto', 'third', 'half', 'full'] as const;
const BRIGHTNESSES = ['light', 'dark'] as const;

export const Index: Story = {
  render: () => (
    <div>
      <h2>appearance</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {APPEARANCES.map((appearance) => (
          <Button 
            key={appearance}
            onClick={() => alert("送信完了")} 
            label="送信" 
            appearance={appearance}
            color="neutral"
          />
        ))}
      </div>

      <h2>brightness</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {BRIGHTNESSES.map((brightness) => (
          <Button 
            key={brightness}
            onClick={() => alert("送信完了")} 
            label="送信" 
            appearance="hollow"
            color="neutral"
            brightness={brightness}
          />
        ))}
      </div>

      <h2>color</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {COLORS.map((color) => (
          <Button 
            key={color}
            onClick={() => alert("送信完了")} 
            label="送信" 
            appearance="flat"
            color={color}
          />
        ))}
      </div>

      <h2>shape</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {SHAPES.map((shape) => (
          <Button 
            key={shape}
            onClick={() => alert("送信完了")} 
            label="送信" 
            appearance="flat"
            color="neutral"
            shape={shape}
          />
        ))}
      </div>

      <h2>size</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {SIZES.map((size) => (
          <Button 
            key={size}
            onClick={() => alert("送信完了")} 
            label="送信" 
            appearance="flat"
            color="neutral"
            size={size}
          />
        ))}
      </div>

      <h2>width</h2>
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', flexWrap: 'wrap' }}>
        {WIDTHS.map((width) => (
          <div key={width}>
            <Button 
              onClick={() => alert("送信完了")} 
              label="送信" 
              appearance="flat"
              color="neutral"
              width={width}
            />
          </div>
        ))}
      </div>
    </div>
  )
};
