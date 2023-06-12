import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/captcha-field'



const meta: Meta = {
    component: 'captcha-field'
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<captcha-field></captcha-field>`,
}
