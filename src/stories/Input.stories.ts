import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/input';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  title: 'Basic/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputSize: { control: { type: 'select' } },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
  },
  args: { onChange: fn(), onBlur: fn(), onFocus: fn() },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Empty: Story = {
  args: {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Write something here...',
  },
};

export const WithHorizontalLabel: Story = {
  args: {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Your name here...',
    label: 'Name:',
    orientation: 'horizontal',
  },
};

export const WithVerticalLabel: Story = {
  args: {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Your name here...',
    label: 'Name:',
    orientation: 'vertical',
  },
};

export const WithDefaultValue: Story = {
  args: {
    type: 'text',
    inputSize: 'md',
    defaultValue: 'With default value',
  },
};

export const Small: Story = {
  args: {
    type: 'text',
    inputSize: 'sm',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    type: 'text',
    inputSize: 'lg',
    placeholder: 'Large input',
  },
};
