import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/custom-link'


const meta: Meta = {
    component: 'custom-link'
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<custom-link linkText='Login with Email'
                                    linkType='need-help'>
                       </custom-link>`,
}