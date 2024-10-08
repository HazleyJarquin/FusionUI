import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    title: "Click me",
    mode: "primary",
    onClick: () => alert("Button clicked"),
  },
  argTypes: {
    mode: {
      control: { type: "select" },
    },
    onClick: { action: "clicked" },
  },
};
