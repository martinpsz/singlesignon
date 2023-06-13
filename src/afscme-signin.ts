import { LitElement, html, css} from "lit";
import {customElement} from "lit/decorators.js"
import Logo from './static/afscme.svg'
import './components/afscme-logo.js'
import './components/Screens/home-screen'
import './components/Screens/email-login'
import './components/Screens/create-account'
import './components/Screens/confirmation-code'
import './components/Screens/confirmation-memberid'
import './components/Screens/member-search'
import './components/Screens/verification-options'
import './components/Screens/contact-services'


@customElement("afscme-signin")
export class AFSCMESignin extends LitElement{
    
    static styles = css`
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--white);
        }

        
        @media (min-width: 768px){
            :host{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: url('../src/static/afscme-rally.jpeg'), var(--green);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: top center;
                background-blend-mode: multiply;
            }

            .container{
                border-radius: 0.25em;
                width: 480px;
            }

        }
    
    `


    protected render(){
        return html`
            <div class="container">
                <afscme-logo imgSrc=${Logo} imgAlt='AFSCME Logo' logoText='Member Portal'></afscme-logo>
                <contact-services></contact-services>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "afscme-signin": AFSCMESignin;
    }
}