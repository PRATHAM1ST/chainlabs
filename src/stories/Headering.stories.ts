import type { Meta, StoryObj } from '@storybook/react';
import Header  from './Headering';

const meta : Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  args:{
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    
  },
};