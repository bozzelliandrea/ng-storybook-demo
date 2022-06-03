import type {Meta} from '@storybook/angular';
import {moduleMetadata, Story} from '@storybook/angular';
import {NavbarComponent} from "../app/custom/component/header/navbar.component";
import {CustomModule} from "../app/custom/custom.module";
import {MatIconRegistry} from '@angular/material/icon';
import {userEvent, within} from "@storybook/testing-library";
import {expect} from "@storybook/jest"

export default {
  title: 'Example/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomModule],
      providers: [MatIconRegistry]
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args
});

export const Standard = Template.bind({});
Standard.args = {};

Standard.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getAllByText('Home')[0]);
  expect(args.navEvent).toBeCalled();
  expect(args.navEvent).toHaveBeenCalledTimes(1);
  expect((args.navEvent as any).mock.calls[0][0].source).toBe("Home");
  expect((args.navEvent as any).mock.calls[0][0]._internal).toBe("navbar_home");

  await userEvent.click(canvas.getAllByText('Wallet')[0]);
  expect(args.navEvent).toBeCalled();
  expect(args.navEvent).toHaveBeenCalledTimes(2);
  expect((args.navEvent as any).mock.calls[1][0].source).toBe("Wallet");
  expect((args.navEvent as any).mock.calls[1][0]._internal).toBe("navbar_wallet");

  await userEvent.click(canvas.getAllByText('Currency')[0]);
  expect(args.navEvent).toBeCalled();
  expect(args.navEvent).toHaveBeenCalledTimes(3);
  expect((args.navEvent as any).mock.calls[2][0].source).toBe("Currency");
  expect((args.navEvent as any).mock.calls[2][0]._internal).toBe("navbar_currency");

  await userEvent.click(canvas.getAllByText('Stats')[0]);
  expect(args.navEvent).toBeCalled();
  expect(args.navEvent).toHaveBeenCalledTimes(4);
  expect((args.navEvent as any).mock.calls[3][0].source).toBe("Stats");
  expect((args.navEvent as any).mock.calls[3][0]._internal).toBe("navbar_stats");
};
