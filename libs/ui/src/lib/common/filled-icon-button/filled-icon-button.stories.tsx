import DeleteIcon from '@mui/icons-material/Delete';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FilledIconButton } from './filled-icon-button';

const Story: ComponentMeta<typeof FilledIconButton> = {
  component: FilledIconButton,
  title: 'FilledIconButton',
  argTypes: {
    backgroundColor: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof FilledIconButton> = (args) => (
  <FilledIconButton {...args}>
    <DeleteIcon />
  </FilledIconButton>
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: 'secondary',
};
