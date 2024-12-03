import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { CardMock1 } from "@/shared/mocks/Card.mocks";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...CardMock1,
  },
};