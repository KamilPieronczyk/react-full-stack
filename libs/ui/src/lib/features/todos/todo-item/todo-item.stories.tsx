import type { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryIcon from '../../../common/category-icon/category-icon';
import { TodoItem } from './todo-item';

const Story: ComponentMeta<typeof TodoItem> = {
  component: TodoItem,
  title: 'TodoItem',
};
export default Story;

const Template: ComponentStory<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconNode: <CategoryIcon name="books" />,
  color: 'blue',
  name: 'Read the witcher',
  completed: false,
};
