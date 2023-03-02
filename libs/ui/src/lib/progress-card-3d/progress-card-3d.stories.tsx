import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressCard3D } from './progress-card-3d';

const Story: ComponentMeta<typeof ProgressCard3D> = {
  component: ProgressCard3D,
  title: 'ProgressCard3D',
  args: {
    title: 'Daily Progress',
    description: 'Keep up the good work!',
    progress: 50,
  },
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ProgressCard3D> = (args) => <ProgressCard3D {...args} />;

export const Default = Template.bind({});
Default.args = {};
