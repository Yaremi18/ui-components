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

const text = {
  1: 'This is a title level 1',
  2: 'This is a title level 2',
  3: 'This is a title level 3',
  4: 'This is a title level 4',
};

export const TitleLevel1: TitleStory = {
  args: {
    children: text[1],
    level: 1,
    divider: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text.Title level={1}>${text[1]}</Text.Title>`,
      },
    },
  },
};

export const TitleLevel2: TitleStory = {
  args: {
    children: text[2],
    level: 2,
    divider: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text.Title level={2}>${text[2]}</Text.Title>`,
      },
    },
  },
};

export const TitleLevel3: TitleStory = {
  args: {
    children: text[3],
    level: 3,
    divider: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text.Title level={3}>${text[3]}</Text.Title>`,
      },
    },
  },
};

export const TitleLevel4: TitleStory = {
  args: {
    children: text[4],
    level: 4,
    divider: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text.Title level={4}>${text[4]}</Text.Title>`,
      },
    },
  },
};

export const TitleWithDivider: TitleStory = {
  args: {
    children: 'This is a title with divider',
    level: 1,
    divider: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text.Title divider level={1}>This is a title with divider</Text.Title>`,
      },
    },
  },
};
