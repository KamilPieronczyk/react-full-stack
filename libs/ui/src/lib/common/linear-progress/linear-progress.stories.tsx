import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinearProgress } from './linear-progress';

const Story: ComponentMeta<typeof LinearProgress> = {
  component: LinearProgress,
  title: 'LinearProgress',
  args: {
    value: 50,
    color: 'secondary',
  },
};
export default Story;

const Template: ComponentStory<typeof LinearProgress> = (args) => <LinearProgress {...args} />;

export const Default = Template.bind({});
Default.args = {};
