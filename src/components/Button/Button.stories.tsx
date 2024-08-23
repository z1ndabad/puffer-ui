import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;
const content = "Button";

const Default: Story = {
  args: {
    variant: "default",
    children: content,
  },
};

const Destructive: Story = {
  args: {
    variant: "destructive",
    children: content,
  },
};

const Outline: Story = {
  args: {
    variant: "outline",
    children: content,
  },
};

const Secondary: Story = {
  args: {
    variant: "secondary",
    children: content,
  },
};

export { Default, Destructive, Outline, Secondary };
