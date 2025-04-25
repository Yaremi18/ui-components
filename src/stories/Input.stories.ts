import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/input';
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
    size: { control: { type: 'select' } },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Empty: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Write something here...',
  },
};

export const WithDefaultValue: Story = {
  args: {
    type: 'text',
    size: 'md',
    defaultValue: 'With default value',
  },
};

export const Small: Story = {
  args: {
    type: 'text',
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    type: 'text',
    size: 'lg',
    placeholder: 'Large input',
  },
};
