import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TodoItem } from './todo-item';

const Story: ComponentMeta<typeof TodoItem> = {
  component: TodoItem,
  title: 'TodoItem',
};
export default Story;

const Template: ComponentStory<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconNode: <AutoStoriesIcon />,
  color: 'blue',
  name: 'Read the witcher',
  completed: false,
};
