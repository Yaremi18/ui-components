import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components/text';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Text>;

const meta: Meta<StoryProps> = {
  title: 'Basic/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', name: 'label' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'This is a default text',
  },
};
