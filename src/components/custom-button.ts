import { LitElement, html, css, nothing} from "lit";
import { customElement, property} from "lit/decorators.js";
import {classMap} from 'lit/directives/class-map.js';

@customElement('custom-button')
export class CustomButton extends LitElement{

    static styles = css`
        button{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-family: var(--Poppins);
            padding: 0.5em 1em;
            border: none;
            border-radius: 0.25em;
            color: var(--white);
            text-transform: uppercase;
            line-height: 1;
            -webkit-box-shadow: 0px 2px 4px rgba(42,45,52,1);
            -moz-box-shadow: 0px 2px 4px rgba(42,45,52,1);
            box-shadow: 0px 2px 4px rgba(42,45,52,1);
            cursor: pointer;
        }

        button:active{
            box-shadow: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
        }

        #lt-icon{
            margin-right: 0.25em;
        }

        #rt-icon{
            margin-left: 0.25em;
        }

        .btnPrimary{
            background: var(--green)
        }

        .btnSecondary{
            background: var(--blue);
        }

        .btnWarning{
            background: var(--red);
        }
    
    `
    
    @property()
    buttonText?: string;

    @property()
    rightIcon!: string;

    @property()
    leftIcon!: string;

    @property({type: Boolean})
    btnPrimary = false;

    @property({type: Boolean})
    btnSecondary = false;

    @property({type: Boolean})
    btnWarning = false;


    protected render(){

        const classes = {btnPrimary: this.btnPrimary, btnSecondary: this.btnSecondary, btnWarning: this.btnWarning}

        return html`
            <button class=${classMap(classes)}>
                ${this.leftIcon ? 
                        html`<iconify-icon id='lt-icon' inline icon=${this.leftIcon} style="font-size: 24px;" ></iconify-icon> ${this.buttonText}`:
                        html`${this.buttonText} <iconify-icon inline id='rt-icon' class="iconify-inline" icon=${this.rightIcon} style="font-size: 24px;"></iconify-icon>`}
            </button>
        
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "custom-button": CustomButton;
    }
}