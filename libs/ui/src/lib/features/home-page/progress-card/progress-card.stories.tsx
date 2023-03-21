import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CATEGORIES } from 'libs/models/src/lib/constants/categories';
import { ProgressCard } from './progress-card';

const Story: ComponentMeta<typeof ProgressCard> = {
  component: ProgressCard,
  title: 'ProgressCard',
  args: {
    title: 'Books',
    newTasks: 5,
    completed: 10,
    total: 20,
  },
  argTypes: {
    icon: {
      control: {
        type: 'radio',
        options: Object.keys(CATEGORIES),
      },
    },
    color: {
      control: {
        type: 'radio',
        options: ['blue', 'orange', 'purple', 'green'],
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ProgressCard> = (args) => <ProgressCard {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};

export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
};

export const Purple = Template.bind({});
Purple.args = {
  color: 'purple',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
};
