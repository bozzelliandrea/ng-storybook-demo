import {moduleMetadata} from "@storybook/angular";
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
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => ({
  props: {
    ...args
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
