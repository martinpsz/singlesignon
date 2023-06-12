import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/section-directions'


const meta: Meta = {
    component: 'section-directions'
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<section-directions directionText="Enter the email and password associated with your AFSCME membership."></section-directions>`,
}