import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import {ifDefined} from 'lit/directives/if-defined.js';


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
            position: relative;
        }

        label:has(+ input:required)::after{
            content: '*';
            color: var(--red);
            
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

        p{
            color: var(--red);
            margin: 0;
            font-family: var(--Poppins);
            font-size: var(--font-size-sm);
            text-transform: uppercase;
        }

    
    `

    @property()
    fieldLabel!: string;

    @property()
    inputType!: string;

    @property()
    inputId!: string;

    @property()
    required!: Boolean

    @property()
    pattern!: RegExp;

    @property()
    minLength!: number;

    @property()
    maxLength!: number;

    @property()
    warning!: string;

    protected render(){
        
        return html`
            <label for=${this.inputId}>${this.fieldLabel}</label>
            <input name=${this.inputId} 
                   id=${this.inputId} 
                   type=${this.inputType} 
                   required=${ifDefined(this.required)}
                   pattern=${ifDefined(this.pattern)}
                   minlength=${ifDefined(this.minLength)}
                   maxlength=${ifDefined(this.maxLength)}
                   @change=${(e : InputEvent) => this._returnInputValue(e)}
            /><span></span>
            ${this.warning ? html`<p>${this.warning}</p>` : nothing}
        `   
    }

    _returnInputValue = (e: InputEvent) => {

        const inputTarget = e.target as HTMLInputElement;

        this.dispatchEvent(new CustomEvent('getInputValue', {
            detail: inputTarget.value,
            composed: true,
            bubbles: true
        }))
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "input-field": InputField;
    }
}