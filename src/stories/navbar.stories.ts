import type {Meta} from '@storybook/angular';
import {moduleMetadata, Story} from '@storybook/angular';
import {NavbarComponent} from "../app/custom/component/header/navbar.component";
import {CustomModule} from "../app/custom/custom.module";
import {CommonModule} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

export default {
  title: 'Example/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomModule, CommonModule, MatIconModule, MatBadgeModule],
      providers: [MatIconRegistry]
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {};
