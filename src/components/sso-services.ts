import { LitElement, html, css, nothing } from "lit";
import {customElement, property} from 'lit/decorators.js'


const services = [
   {
    name: 'Facebook',
    icon: "logos:facebook"
   },
   {
    name: 'Microsoft',
    icon: "logos:microsoft-icon"
   },
   {
    name: 'Google',
    icon: "flat-color-icons:google"
   },
   {
    name: 'Apple',
    icon: "devicon:apple"
   }
]

@customElement('sso-services')
export class SSOServices extends LitElement{

    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            align-items: center;
        }


        p{
            margin: 2em 0 0 0;
            font-family: var(--Poppins);
            font-size: var(--font-size-sm);
            text-transform: uppercase;
            font-style: italic;
        }

        

        button{
            border: 1px solid var(--blue);
            border-radius: 0.5em;
            padding: 0.5em 0.75em;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            margin-top: 1em;
            background: var(--white);
            cursor: pointer;
            
        }

        .icon{
            margin-right: 0.5em;
        }

        span{
            font-family: var(--Poppins);
            color: var(--black);
            text-transform: uppercase;
           
        }
    
    `

    @property({type: Boolean})
    show_service_name = false;

    
    protected render(){
        return html`
        <p>${this.show_service_name ? html`<p>Sign in with:</p>`: html`<p>Or sign in with:</p>`}</p>
        <div>${services.map(service => {
            return html`
                <button>
                    <iconify-icon inline icon=${service.icon} style="font-size: 32px" class="icon"></iconify-icon>
                    ${this.show_service_name ? html`<span>${service.name}</span>` : nothing}
                </button>
            
            `
        })}</div>
     `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "sso-services": SSOServices;
    }
}