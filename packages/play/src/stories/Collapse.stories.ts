import type { Meta, StoryObj } from "@storybook/vue3";
import { XmCollapse, XmCollapseItem } from "xm-element";
import 'xm-element/dist/index.css'

type Story = StoryObj<typeof XmCollapse>;

const meta: Meta<typeof ErCollapse> = {
    title: "Example/Collapse",
    component: XmCollapse,
    subcomponents: { XmCollapseItem },
    tags: ["autodocs"],
};

export const Default: Story = {
    render: (args) => ({
        components: {
            XmCollapse,
            XmCollapseItem,
        },
        setup() {
            return {
                args,
            };
        },
        template: `
    <xm-collapse v-bind="args">
      <xm-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </xm-collapse-item>
      <xm-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </xm-collapse-item>
      <xm-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </xm-collapse-item>
    </xm-collapse>
    `,
    }),
    args: {
        accordion: true,
        modelValue: ["a"],
    },
};

export default meta;
