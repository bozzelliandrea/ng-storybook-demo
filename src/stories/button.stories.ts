// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {NavbarComponent} from "../app/custom/component/header/navbar.component";
import {moduleMetadata} from "@storybook/angular";
import {MatButton, MatButtonModule} from '@angular/material/button';


export default {
  title: 'Example/Button',
  component: MatButton,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
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
