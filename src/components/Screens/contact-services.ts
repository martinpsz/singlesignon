import { LitElement, html, css } from "lit";
import {customElement} from 'lit/decorators.js'
import '../section-directions'
import '../custom-button'
import ContactServicesSettings from '../../settings.json'

@customElement('contact-services')
export class ContactServices extends LitElement{
    static styles = css`
        :host{
            padding: 0 1em;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100%-1em);
            margin: 1em 0;
        
        }

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--blue);
            text-decoration-color: var(--blue);
        }

        a span{
            font-family: var(--Poppins);
            margin-left: 0.5em;
        }

        a:nth-of-type(1){
            margin-top: 1.5em;
        }

        a:nth-of-type(2){
            margin: 1em 0 2em;
        }

        
    
    `
    protected render(){

        const helpText = ContactServicesSettings.ContactServicesSettings.helpText
        return html`
            <section-directions helpText=${helpText}></section-directions>
            <a href='tel:'><iconify-icon icon="ph:phone-call-light" style=" font-size: 24px;"></iconify-icon> <span>Call AFSCME<span></a>
            <a href='mailto:'><iconify-icon icon="carbon:email" style=" font-size: 24px;"></iconify-icon> <span>Email AFSCME</span></a>


        
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "contact-services": ContactServices;
    }
}