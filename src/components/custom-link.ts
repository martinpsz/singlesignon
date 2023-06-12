import { LitElement, html, css } from "lit";
import {customElement, property} from 'lit/decorators.js'

type Link = 'navigation' | 'need-help' // navigation denotes link that moves from screen to screen. needs-info handles things like resending codes, reset passwords.

@customElement('custom-link')
export class CustomLink extends LitElement{

    static styles = css`
        button{
            background: none;
            border: none;
            text-decoration: underline;
            font-family: var(--Poppins);
            color: var(--black);
        }

        .need-help{
            font-size: var(--font-size-sm);
            text-transform: uppercase;
        }
    
    `

    @property()
    linkText!: string;

    @property()
    linkType: Link = 'navigation';

    protected render(){
        return html`<button class=${this.linkType === 'navigation' ? 'nav' : 'need-help'}>${this.linkText}</button>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "custom-link": CustomLink;
    }
}