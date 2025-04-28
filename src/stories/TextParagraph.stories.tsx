import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components/text';
import type { ComponentProps } from 'react';

type ParagraphProps = ComponentProps<typeof Text.Paragraph>;
type ParagraphStory = StoryObj<ParagraphProps>;

const meta: Meta<typeof Text.Paragraph> = {
  title: 'Basic/Text/Paragraph',
  component: Text.Paragraph,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Paragraph is a component that displays a paragraph of text with a default font size and line height.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      name: 'label',
      description: 'Paragraph content',
    },
  },
};

export default meta;

const paragraphText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et orci laoreet, varius enim sed, ullamcorper lacus. Suspendisse ac dolor turpis. Praesent id pharetra tellus. In egestas turpis vel justo facilisis, vitae viverra mi faucibus. Proin id diam sagittis, porta quam sit amet, luctus est. Integer vitae nisi eget mi pharetra congue. Vestibulum ultricies, urna ac ultricies tristique, neque turpis consequat mi, sit amet ultrices dui dolor sed libero. Donec quam tortor, porttitor ut varius et, aliquet vitae lorem. Sed dictum egestas ipsum.';

export const Paragraph: ParagraphStory = {
  args: {
    children: paragraphText,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text.Paragraph>${paragraphText}</Text.Paragraph>`,
      },
    },
  },
};
