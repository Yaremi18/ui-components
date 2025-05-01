import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '../components/layout';

type StoryProps = React.ComponentProps<typeof Layout>;

const meta: Meta<StoryProps> = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      name: 'children',
      description:
        'Content of the layout, you should use `Layout.Header`, `Layout.Content` and `Layout.Footer` inside the tag <Layout> to use the layout properly.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Layout>
      <Layout.Header>
        <div
          style={{
            borderRadius: '50%',
            width: 35,
            height: 35,
            backgroundColor: 'var(--accent)',
          }}
        />

        <label>Company name</label>
      </Layout.Header>
      <Layout.Content>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          This is the content of the layout. You can put anything you want here.
        </div>
      </Layout.Content>
      <Layout.Footer>
        Copyrigth ® All rights reserved | This template is made with ♡
      </Layout.Footer>
    </Layout>
  ),
};
