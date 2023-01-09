import Label from "../components/Label";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'example',
    component: Label
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Basic = Template.bind({})
Basic.args = {
  size: 'normal'
}

export const Secondary = Template.bind({})