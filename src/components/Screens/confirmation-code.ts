import { LitElement, html, css } from "lit";
import {customElement} from 'lit/decorators.js'
import '../section-directions';
import '../code-fields'
import '../custom-link'
import '../custom-button'
import EnterValidationCode from '../../settings.json'

@customElement('confirmation-code')
export class ConfirmationCode extends LitElement{
    static styles = css`
        :host{
            margin-bottom: 2em;
            padding: 0 1em;
        }
        
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100% - 1em);
            border: 1
        }

        div > * {
            margin-top: 1.5em;
        }

        #resend-code{
            margin-top: 0.25em;
        }
        

        custom-button{
            align-self: flex-end;
        }



    
    `

    protected render(){
        const helpText = EnterValidationCode.EnterValidationCode.helpText

        return html`
            <section-directions helpText=${helpText}></section-directions>
            <div id='outer-wrapper'>
                <code-fields></code-fields>
                <custom-link linkText='Resend Code' linkType='need-help' id='resend-code'></custom-link>
                <custom-button rightIcon='carbon:cloud-upload' buttonText='Validate' btnSecondary></custom-button>
            </div>
          

        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "confirmation-code": ConfirmationCode;
    }
}