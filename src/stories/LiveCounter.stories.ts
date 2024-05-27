import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Header from "@/components/Counter";

const meta = {
	title: "Live/Counter",
	component: Header,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		count: 1,
		setCount: fn((prev) => {
            return prev;
		}),
	},
};
