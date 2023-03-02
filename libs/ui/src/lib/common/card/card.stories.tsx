import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Card',
  args: {
    children: 'Card Content',
  },
};
export default Story;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
