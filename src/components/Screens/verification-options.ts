import {LitElement, html, css} from 'lit';
import { customElement } from 'lit/decorators.js';
import '../section-directions';
import '../custom-button';
import '../custom-link';
import VerificationOpts from '../../settings.json'

@customElement('verification-options')
export class VerificationOptions extends LitElement{
    static styles = css`
        :host{
            padding: 1em;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        custom-link{
            margin: 0.5em
        }

        custom-button{
            margin-top: 2em;
        }
    
    `

    protected render(){
        const helpText = VerificationOpts.VerificationOpts.helpText

        return html`
            <section-directions helpText=${helpText}></section-directions>
            <custom-link linkText='I have a membership validation code'></custom-link>
            <custom-link linkText='I have my member id #'></custom-link>
            <custom-link linkText='Find my membership'></custom-link>

            <custom-button leftIcon='carbon:home' buttonText='Home' btnPrimary></custom-button>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "verification-options": VerificationOptions;
    }
}