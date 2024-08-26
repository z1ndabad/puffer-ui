import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;
const content = "Button";

// TODO: Generate stories for all variants + sizes + disabled automatically
// Getting variants programmatically from cva() is not supported yet, watch
// https://github.com/joe-bell/cva/discussions/146
export const Default: Story = {
  args: {
    variant: "default",
    children: content,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: content,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: content,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: content,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: content,
  },
};

export const Link: Story = {
  args: {
    variant: "link",
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
