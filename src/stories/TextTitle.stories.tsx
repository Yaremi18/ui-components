import { Text } from '@/components/text';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

type TitleProps = ComponentProps<typeof Text.Title>;
type TitleStory = StoryObj<TitleProps>;

const meta: Meta<typeof Text.Title> = {
  title: 'Basic/Text/Title',
  component: Text.Title,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Title is a component that displays a title with different levels and optional divider.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', name: 'label', description: 'Title content' },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: 'Title level',
    },
    divider: {
      control: { type: 'boolean' },
      description: 'Title has divider?',
    },
  },
};

export default meta;

export const TitleLevel1: TitleStory = {
  args: {
    children: 'This is a title level 1',
    level: 1,
    divider: false,
  },
};

export const TitleLevel2: TitleStory = {
  args: {
    children: 'This is a title level 2',
    level: 2,
    divider: false,
  },
};

export const TitleLevel3: TitleStory = {
  args: {
    children: 'This is a title level 3',
    level: 3,
    divider: false,
  },
};

export const TitleLevel4: TitleStory = {
  args: {
    children: 'This is a title level 4',
    level: 4,
    divider: false,
  },
};

export const TitleWithDivider: TitleStory = {
  args: {
    children: 'This is a title with divider',
    level: 1,
    divider: true,
  },
};
