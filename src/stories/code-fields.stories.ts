import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/code-fields'



const meta: Meta = {
    component: 'code-fields'
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<code-fields inputLength=6></code-fields>`,
}
