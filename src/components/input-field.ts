import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import {ifDefined} from 'lit/directives/if-defined.js'
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

        input + span{
            position: relative;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        input[type=number] {
        -moz-appearance: textfield;
        }

        #error{
            margin: 0;
            font-family: var(--Poppins);
            font-size: var(--font-size-sm);
            color: var(--red);
        }
    
    `

    @property()
    fieldLabel!: string;

    @property()
    inputType!: string;

    @property()
    inputId!: string;

    @property()
    error!: string

    protected render(){
        return html`
            <label for=${this.inputId}>${this.fieldLabel}</label>
            <input name=${this.inputId} id=${this.inputId} type=${this.inputType} 
            @change=${(e:InputEvent) => this._setInputValue(e)}/><span></span>
            ${this.error ? html`<p id='error'>${this.error}</p>` : nothing}
        `   
    }

    _setInputValue = (e: InputEvent) => {
        const eventTarget = e.target as HTMLInputElement

        this.dispatchEvent(new CustomEvent('getInputValue', {
            detail: eventTarget.value,
            bubbles: true,
            composed: true
        }))
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "input-field": InputField;
    }
}