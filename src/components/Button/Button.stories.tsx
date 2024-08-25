import React from "react";
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

const Ghost: Story = {
  args: {
    variant: "ghost",
    children: content,
  },
};

const Link: Story = {
  args: {
    variant: "link",
    children: content,
  },
};

const Performance: Story = {
  render: () => {
    const buttonArr = [];
    for (let i = 0; i < 1000; i++) {
      buttonArr.push(
        <Button key={i} variant={"destructive"}>
          Button
        </Button>,
      );
    }
    return <div>{buttonArr}</div>;
  },
};

export { Default, Destructive, Outline, Secondary, Ghost, Link, Performance };
