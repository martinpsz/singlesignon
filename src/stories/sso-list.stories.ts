import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/SSO/sso-list'



const meta: Meta = {
    component: 'sso-list',
    
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<sso-list></sso-list>`,
}

