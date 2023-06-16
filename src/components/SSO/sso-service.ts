import { LitElement, html, css, nothing } from "lit";
import { customElement, property} from "lit/decorators.js";

@customElement('sso-service')
export class SSOService extends LitElement{
    static styles = css`
        :host(.no-label) button{
            height: 40px;
            width: 40px;
        }

        :host(:not(.no-label)) button{
            width: 160px;
            height: 40px;
        }

    
        button{
            border: 1px solid var(--blue);
            background: none;
            border-radius: 0.25em;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1.5em 0.75em;
            cursor: pointer;
        }

        span{
            margin-left: 1em;
            font-family: var(--Poppins);
            color: var(--black);
        }
    `

    @property()
    serviceLogo!: string;

    @property({type: Boolean})
    serviceLogoEnlarged: boolean = false;

    @property()
    serviceName!: string;

    @property({type: Boolean})
    showServiceName: boolean = false;

    
    /**
     * 
     * Replace click function in button with function to handle connection to service. You can use
     * 'this.serviceName' to pass the name of the service to your function. 
     */
    protected render() {
        return html`
            <button @click=${this._setSSOSelection}>
                <iconify-icon icon=${this.serviceLogo} class="icon" style=${this.serviceLogoEnlarged ? 
                'font-size: 32px' : 'font-size: 24px'}></iconify-icon>
                ${this.showServiceName ? html`<span>${this.serviceName}</span>` : nothing}
            </button>
        `
    }

    _setSSOSelection = () => {
        this.dispatchEvent(new CustomEvent('get_SSO_selection', {
            detail: this.serviceName.toUpperCase(),
            bubbles: true,
            composed: true
        }))
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "sso-service": SSOService;
    }
}