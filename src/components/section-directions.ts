import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('section-directions')
export class SectionDirections extends LitElement{
    static styles = css`
        p{
            font-family: var(--Poppins);
            color: var(--black);
            font-size: clamp(0.75rem, 0.679rem + 0.357vw, 1rem);
            font-weight: var(--font-weight-light);
        }

        @media (min-width: 768px){
            p{
                padding: 0 1em;
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