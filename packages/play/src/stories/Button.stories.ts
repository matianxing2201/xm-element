import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'

import { XmButton } from 'xm-element'

type Story = StoryObj<typeof XmButton> & { argTypes: ArgTypes }

const meta: Meta<typeof XmButton> = {
    title: "Example/Button",
    component: XmButton,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["primary", "success", "warning", "danger", "info"],
        },
        size: {
            control: { type: "select" },
            options: ["large", "default", "small", ""],
        },
        disabled: {
            control: "boolean",
        },
        loading: {
            control: "boolean",
        },
        useThrottle: {
            control: "boolean",
        },
        throttleDuration: {
            control: "number",
        },
        autofocus: {
            control: "boolean",
        },
        tag: {
            control: { type: "select" },
            options: ["button", "a", "div"],
        },
        nativeType: {
            control: { type: "select" },
            options: ["button", "submit", "reset", ""],
        },
        icon: {
            control: { type: "text" },
        },
        loadingIcon: {
            control: { type: "text" },
        },
    },
    args: { onClick: fn() },
}

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
    argTypes: {
        content: {
            control: { type: "text" },
        },
    },
    args: {
        type: "primary",
        content: "Button",
    },
    render: (args) => ({
        components: { XmButton },
        setup() {
            return { args };
        },
        template: container(
            `<xm-button v-bind="args">{{args.content}}</xm-button>`
        ),
    }),
}

export default meta