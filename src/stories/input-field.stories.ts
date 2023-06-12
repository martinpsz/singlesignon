import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/input-field'


const meta: Meta = {
    component: 'input-field'
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<input-field fieldLabel="Email:" inputId="Email" inputType="email"></input-field>`,
}
