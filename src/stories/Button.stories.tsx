import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@/components/button';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: 'Basic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    type: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
    children: { control: 'text', name: 'label' },
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'md',
    children: 'Primary button',
  },
};

export const Default: Story = {
  args: {
    type: 'default',
    size: 'md',
    children: 'Default button',
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    size: 'md',
    children: 'Link button',
  },
};

export const Large: Story = {
  args: {
    type: 'primary',
    size: 'lg',
    children: 'Large button',
  },
};

export const Medium: Story = {
  args: {
    type: 'primary',
    size: 'md',
    children: 'Medium button',
  },
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'sm',
    children: 'Small button',
  },
};

export const BackgroundColor: Story = {
  args: {
    type: 'primary',
    size: 'md',
    children: 'Background color',
    backgroundColor: '#4e67f3',
  },
};
