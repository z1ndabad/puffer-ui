import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
};

export default meta;

// TODO: Generate stories for all variants + sizes + disabled automatically
// Getting variants programmatically from cva() is not supported yet, watch
// https://github.com/joe-bell/cva/discussions/146

type Story = StoryObj<typeof Button>;
const content = "Button";

export const Primary: Story = {
  args: {
    variant: "default",
    children: content,
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          maxWidth: "20%",
        }}
      >
        <Button disabled variant={"default"}>
          {content}
        </Button>
        <Button disabled variant={"destructive"}>
          {content}
        </Button>
        <Button disabled variant={"outline"}>
          {content}
        </Button>
        <Button disabled variant={"secondary"}>
          {content}
        </Button>
        <Button disabled variant={"ghost"}>
          {content}
        </Button>
        <Button disabled variant={"link"}>
          {content}
        </Button>
      </div>
    );
  },
};

export const Performance: Story = {
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
