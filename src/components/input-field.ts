import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('input-field')
export class InputField extends LitElement{

    static styles = css`
        :host{
            display: inline-flex;
            flex-direction: column;
        }

        label{
            color: var(--black);
            font-family: var(--Poppins);
            text-transform: uppercase;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-light);

        }

        input{
            border: none;
            border-bottom: 1px solid var(--black);
            height: 1.5em;
            margin-top: 0.5em;
            font-family: var(--Poppins);
            color: var(--black);
            

        }

        input:focus{
            outline: transparent;
        }

        input:not(:focus):invalid{
            border-bottom-color: var(--red);
        }

        input + span{
            position: relative;
        }

        input:not(:focus):invalid + span:after{
            content: url('https://api.iconify.design/carbon/warning-alt.svg?color=%23ff331f&height=16');
            position: absolute;
            right: 0;
            bottom: 0;
        }

        input:not(:focus):valid + span:after{
            content: url('https://api.iconify.design/carbon/checkmark-outline.svg?color=%2305ad52&height=16');
            position: absolute;
            right: 0;
            bottom: 0;
        }
    
    `

    @property()
    fieldLabel!: string;

    @property()
    inputType!: string;

    @property()
    inputId!: string;



    protected render(){
        return html`
            <label for${this.inputId}>${this.fieldLabel}</label>
            <input name=${this.inputId} id=${this.inputId} type=${this.inputType}/><span></span>
        `   
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "input-field": InputField;
    }
}