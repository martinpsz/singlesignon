import {LitElement, html, css} from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('input-field')
export class InputField extends LitElement{
    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            margin: 1.5em 0;
        }

        label{
            font-family: var(--Poppins);
            color: var(--black);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-light);
            text-transform: uppercase;
            
        }

        input{
            border: none;
            border-bottom: 1px solid var(--black);
            height: 2em;
            margin: 0;
            font-family: var(--Poppins);
            color: var(--black);
        }

        

        input:focus{
            outline: transparent;
        }
    
    `

    @property()
    fieldLabel!: string;

    @property()
    inputType!: 'email' | 'text' | 'password' | 'tel' | 'number'

    @property()
    inputId!: string


    protected render(){
        return html`
            <label for=${this.inputId}>${this.fieldLabel}</label>
            <input type=${this.inputId} id=${this.inputId} @change=${this._getOnChangeInput}/>
        `
    }

    _getOnChangeInput = (e: InputEvent) => {
        const inputTarget = e.target as HTMLInputElement;
        const inputValue = inputTarget.value;

        console.log(inputValue)

    }
}

declare global {
    interface HTMLElementTagNameMap {
        "input-field": InputField;
    }
}