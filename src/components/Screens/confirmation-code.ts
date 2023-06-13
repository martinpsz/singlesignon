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
    
            padding: 2em 0;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        form code-fields{
            margin-top: 3em;
        }

        form custom-link{
            margin-top: 0.25em;
        }
        
        #btn-group{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 2em;
        }


    
    `

    protected render(){
        const helpText = EnterValidationCode.EnterValidationCode.helpText

        return html`
            <section-directions helpText=${helpText}></section-directions>
            <form>
                <code-fields></code-fields>
                <custom-link linkText='Resend Code' linkType='need-help'></custom-link>
            </form>
            <div id="btn-group">
                <custom-button leftIcon='carbon:home' buttonText='Home' btnPrimary></custom-button>
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