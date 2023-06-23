import { LitElement, html, css} from "lit";
import {customElement, state} from "lit/decorators.js"
import Logo from './static/afscme.svg'
import './components/afscme-logo.js'
import './components/Screens/home-screen'
import './components/Screens/email-login'
import './components/Screens/create-account'
import './components/Screens/confirmation-code'
import './components/Screens/member-search'
import './components/Screens/verification-options'
import './components/Screens/contact-services'



@customElement("afscme-signin")
export class AFSCMESignin extends LitElement{
    
    static styles = css`
        :host{
            height: 100%;
        }

        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            //justify-content: center;
            background: var(--white);
            //min-width: calc(320px - 2em);
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

    @state()
    _formState: 'HOME SCREEN' | 'SIGN IN WITH EMAIL' | 'CREATE AN ACCOUNT' | 'SEARCH FOR MEMBERSHIP' | 'CONTACT MEMBER SERVICES' = 'HOME SCREEN'
   
    _screenUpdateHandler = () => {
        let markup = html`<home-screen @get_login_option=${(e: CustomEvent) => console.log(`This is the selection: ${e.detail}`)}></home-screen>`
        switch(this._formState) {
            case 'HOME SCREEN': 
                markup = html`<home-screen @get_login_option=${(e: CustomEvent) => this._handleSignInSelection(e)}></home-screen>`
                break;
            case 'SIGN IN WITH EMAIL':
                markup = html`<email-login @InnerNavigationEvent=${(e: CustomEvent) => this._handleInnerNavEvent(e)}></email-login>`
                break;
            case 'CREATE AN ACCOUNT':
                markup = html`<create-account @InnerNavigationEvent=${(e: CustomEvent) => this._handleInnerNavEvent(e)}></create-account>`
                break;
            
        }

        return markup
    }

    protected render(){
        console.log('Current state:', this._formState)
        return html`
            <div class="container">
                <afscme-logo imgSrc=${Logo} imgAlt='AFSCME Logo' logoText='Member Portal'></afscme-logo>
                ${this._screenUpdateHandler()}
            </div>
        `
    }

    _ssoSignInHandler = (service: 'FACEBOOK' | 'MICROSOFT' | 'GOOGLE' | 'APPLE') => {
        //Define function to connect to SSO service here. 
    }

    _handleSignInSelection = (e: CustomEvent) => {
        if (e.detail === 'EMAIL'){
            this._formState = 'SIGN IN WITH EMAIL';
        } else if (e.detail === 'CREATE AN ACCOUNT'){
            this._formState = 'CREATE AN ACCOUNT';
        } else {
            this._ssoSignInHandler(e.detail)
        }
    }

    _handleInnerNavEvent = (e: CustomEvent) => {
        this._formState = e.detail
    }
}


declare global {
    interface HTMLElementTagNameMap {
      "afscme-signin": AFSCMESignin;
    }
}