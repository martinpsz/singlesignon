import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import {classMap} from 'lit/directives/class-map.js'

@customElement('custom-button')
export class CustomButton extends LitElement{

    static styles = css`
        button{
            padding: 0.5em 1em;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--Poppins);
            text-transform: uppercase;
            border: none;
            border-radius: 0.5em;
            color: var(--white);
        }

        .left-icon{
            margin-right: 0.5em;
            
           
        }

        .right-icon{
            margin-left: 0.5em;
        }

        .primary{
            background: green;
        }

        .secondary{
            background: var(--blue);
        }

        .warning{
            background: var(--red);
        }
    
    `

    @property()
    buttonText!: string;

    @property()
    buttonIcon!: string;

    @property()
    buttonIconPosition: 'left' | 'right' = 'left'

    @property({type: Boolean})
    primary = false;

    @property({type: Boolean})
    secondary = false;

    @property({type: Boolean})
    warning = false;

    protected render(){
        const classes = {primary: this.primary, secondary: this.secondary, warning: this.warning}
        return html`
            <button class=${classMap(classes)}>
                ${this.buttonIconPosition === 'left' ? 
                html`
                    <iconify-icon inline icon=${this.buttonIcon} style="font-size: 24px; color: white;" class="left-icon"></iconify-icon>
                    ${this.buttonText}` :
                html`
                    ${this.buttonText} 
                    <iconify-icon inline icon=${this.buttonIcon} style="font-size: 24px; color: white;" class="right-icon"></iconify-icon>
                `}
                
            </button>`   
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "custom-button": CustomButton;
    }
}