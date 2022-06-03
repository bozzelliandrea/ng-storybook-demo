import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {Meta, Story} from "@storybook/angular/types-6-0";
import {CustomModule} from "../app/custom/custom.module";
import {TaskComponent} from "../app/custom/component/task/task.component";
import {BadgeElement} from "../app/custom/shared.type";

export default {
  title: 'Example/Task',
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => ({
  props: {
    ...args
  },
  argTypes: {
    status: {
      options: ['TODO', 'PROGRESS', 'END'],
      control: { type: 'radio' },
    },
    darkMode: {
      control: 'boolean',
    }
  },
});

export const Default = Template.bind({});
Default.args = {
  task: "Task Title",
  description: "Task description: create new story",
  badgeList: [
    BadgeElement.of("Bugs", "bug_report", "warn")
  ]
};
