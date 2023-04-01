import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../design/buttons/Button';

export default {
  title: 'Buttons/Button',
  component: Button
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button'
};
