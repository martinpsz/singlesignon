import type {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit';
import '../components/afscme-logo'
import Logo from './static/afscme.svg'



const meta: Meta = {
    component: 'afscme-logo'
};

export default meta;

export const Default : StoryObj = {
    render: () => html`<afscme-logo imgSrc=${Logo} imgAlt="AFSCME Logo" logoText="Member Portal"></afscme-logo>`,
}

