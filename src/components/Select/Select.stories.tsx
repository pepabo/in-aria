import { Select } from "./Select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    docsOnly: true
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { value: 'cat', label: '猫' },
  { value: 'dog', label: '犬' },
  { value: 'rabbit', label: 'うさぎ' },
  { value: 'hamster', label: 'ハムスター' },
];

export const Component: Story = {
  name: "Select",
  render: () => (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h3>デフォルト</h3>
      <Select
        options={sampleOptions}
        placeholder="ペットを選択してください"
        onChange={(value) => console.log('Selected:', value)}
      />

      <h3 style={{ marginTop: "2rem" }}>初期値あり</h3>
      <Select
        options={sampleOptions}
        value="cat"
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  )
};
