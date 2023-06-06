import { LitElement, html, css } from "lit"; 
import { customElement, property } from "lit/decorators.js";

@customElement('afscme-logo')
export class AFSCMELogo extends LitElement{
    /**
     * Properties: 
     *  
     *      - logo_source: Link to logo in local file system.
     *      - logo_alt: Alternative text that will be passed to image alt property
     *      - logo_byline: Text to appear under the logo. 
     */

    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 1em;
        }
        
        
        img{
            height: 80px;
        }

        span{
            font-family: var(--Poppins);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-light);
            text-transform: uppercase;
            color: var(--blue);
        }
    
    `

    @property()
    logo_path!: string;

    @property()
    logo_alt!: string;

    @property()
    logo_byline!: string;


    protected render(){
        return html`
            <img src=${this.logo_path} 
                 alt=${this.logo_alt}>
            <span>${this.logo_byline}</span>
        `
    }
} 

declare global {
    interface HTMLElementTagNameMap {
        "afscme-logo": AFSCMELogo;
    }
}