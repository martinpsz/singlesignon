import { LitElement, html, css} from "lit";
import {customElement, state } from "lit/decorators.js"
import "./components/afscme-logo"
import "./components/sso-services"
import "./components/email-login"
import AFSCMELogo from "./static/afscme.svg";




@customElement("afscme-signin")
export class AFSCMESignin extends LitElement{
    static styles = css`
        .container{
            display: flex;
            flex-direction: column;
        }

        button{
            border: none;
            background: none;
            text-decoration: underline;
            font-family: var(--Poppins);
            color: var(--black);
            margin-top: 4em;
        }
        
    `

    @state()
    signInWithEmail = false;

    protected render(){
        return html`
        <div class="container">
            <afscme-logo logo_path=${AFSCMELogo} logo_alt="AFSCME logo" logo_byline="Member Portal"></afscme-logo>
            ${this.signInWithEmail ? 
                html`<email-login></email-login>` : 
                html`<sso-services show_service_name></sso-services>
                     <button @click=${() => this.signInWithEmail = !this.signInWithEmail}>Login with email</button>    
                `}
        
        </div>`
    }
}