import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/custom-button'


const meta: Meta = {
    component: 'custom-button'
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<custom-button btnSecondary buttonText="Home" leftIcon="ph:address-book">
                       </custom-button>`,
}
