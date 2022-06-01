import {Meta, Story} from '@storybook/angular/types-6-0';
import {componentWrapperDecorator, moduleMetadata, storiesOf} from "@storybook/angular";
import {MatButton, MatButtonModule} from '@angular/material/button';


export default {
  title: 'Example/Button',
  component: MatButton,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story = (args) => ({
  template: `<button mat-raised-button>Basic</button>`,
});

export const Primary: Story = (args) => ({
  template: `<button mat-raised-button color="primary">Primary</button>`,
});

export const Accent: Story = (args) => ({
  template: `<button mat-raised-button color="accent">Accent</button>`,
});

export const Warn: Story = (args) => ({
  template: `<button mat-raised-button color="warn">Warn</button>`,
});

export const Disabled: Story = (args) => ({
  props: args,
  template: `<button mat-raised-button disabled>Disabled</button>`,
});

