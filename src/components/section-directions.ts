import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('section-directions')
export class SectionDirections extends LitElement{
    static styles = css`
        p{
            font-family: var(--Poppins);
            color: var(--black);
            font-size: var(--font-size-sm);
        }
    
    `

    @property()
    directionText!: string;

    protected render() {
       return html`<p>${this.directionText}</p>` 
}}

declare global {
    interface HTMLElementTagNameMap {
      "section-directions": SectionDirections;
    }
}