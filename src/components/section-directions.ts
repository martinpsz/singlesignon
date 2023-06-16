import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('section-directions')
export class SectionDirections extends LitElement{
    static styles = css`
        p{
            font-family: var(--Poppins);
            color: var(--black);
            font-size: var(--font-size-sm);
            margin-top: 1em;
            padding: 0 1em;
            
        }

        @media (min-width: 768px){
            p{
                max-width: 66.7%;
                margin: 1em auto 0;
            }
        }
    
    `

    @property()
    helpText!: string;

    protected render() {
       return html`<p>${this.helpText}</p>` 
}}

declare global {
    interface HTMLElementTagNameMap {
      "section-directions": SectionDirections;
    }
}