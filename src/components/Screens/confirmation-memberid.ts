import { LitElement, html, css } from "lit";
import {customElement} from 'lit/decorators.js';
import '../section-directions'
import '../input-field'
import '../custom-button'
import ConfirmWithMemberId from '../../settings.json'

@customElement('confirmation-memberid')
export class ConfirmationMemberId extends LitElement{
    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1em;
        }

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        form input-field:nth-of-type(1), form input-field:nth-of-type(3){
            margin: 1.5em 0;
        }

        #btn-group{
            margin: 0.5em 0;
            display: flex;
            justify-content: space-evenly;
            width: 100%;
        }
    
    `


    protected render(){
        const helpText = ConfirmWithMemberId.ConfirmWithMemberId.helpText;

        return html`
            <section-directions helpText=${helpText}></section-directions>
            <form>
                <input-field fieldLabel='Member ID#:' inputType='number' inputId='member_id'></input-field>
                <input-field fieldLabel='Email:' inputType='email' inputId='email'></input-field>
                <input-field fieldLabel='Phone:' inputType='tel' inputId='phone'></input-field>
            </form>
            <div id='btn-group'>
                <custom-button leftIcon='carbon:chevron-left' buttonText='Back' btnPrimary></custom-button>
                <custom-button rightIcon='carbon:send-alt' buttonText='Send Code' btnSecondary></custom-button>
            </div>
        `
    }
}


declare global {
    interface HTMLElementTagNameMap {
      "confirmation-memberid": ConfirmationMemberId;
    }
}