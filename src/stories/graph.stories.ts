import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {Meta, Story} from "@storybook/angular/types-6-0";
import {BarChartModule, BarVerticalComponent, NgxChartsModule} from "@swimlane/ngx-charts";
import {Color} from "@swimlane/ngx-charts/lib/utils/color-sets";

export default {
  title: 'Example/Graph',
  component: BarVerticalComponent,
  decorators: [
    moduleMetadata({
      imports: [NgxChartsModule, BarChartModule],
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
    view: { control: 'object' },
    xAxis: { control: 'boolean' },
    yAxis: { control: 'boolean' },
    gradient: { control: 'boolean' },
    legend: { control: 'boolean' },
    showXAxisLabel: { control: 'boolean' },
    xAxisLabel: { control: 'text' },
    showYAxisLabel: { control: 'boolean' },
    yAxisLabel: { control: 'text' },
    scheme: { control: 'object' }
  },
});

export const Histogram = Template.bind({});
Histogram.args = {
  view: [700, 400] as [number, number],
  xAxis: true,
  yAxis: true,
  gradient: false,
  legend: true,
  showXAxisLabel: true,
  xAxisLabel: 'Country',
  showYAxisLabel: true,
  yAxisLabel: 'Population',
  scheme: {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  } as Color,
  results: [
    {
      "name": "Bitcoin",
      "value": 8940000
    },
    {
      "name": "Dogcoin",
      "value": 5000000
    },
    {
      "name": "Coincoin",
      "value": 7200000
    }
  ]
};
