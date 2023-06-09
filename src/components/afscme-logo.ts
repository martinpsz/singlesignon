import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('afscme-logo')
export class AFSCMELogo extends LitElement{

    static styles = css`
        :host{
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            padding: 1em 0;
        }
        img{
            height: clamp(5rem, 4.286rem + 3.571vw, 7.5rem)
        }

        span{
            font-size: clamp(0.75rem, 0.679rem + 0.357vw, 1rem)
            color: var(--blue);
            font-family: var(--Poppins);
            text-transform: uppercase;
            font-weight: 300;
        }
    `

    @property()
    imgSrc!: string;

    @property()
    imgAlt!: string;

    @property()
    logoText?: string;

    protected render(){
        return html`
            <img src=${this.imgSrc} alt=${this.imgAlt}/>
            ${this.logoText ? html`<span>${this.logoText}</span>` : nothing}
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "afscme-logo": AFSCMELogo;
    }
  }