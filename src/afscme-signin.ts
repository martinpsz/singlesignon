import { LitElement, html, css, nothing, TemplateResult} from "lit";
import {customElement, state} from "lit/decorators.js"
import {SignInOptions}  from "./interfaces.js";
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
        :host{
            height: 100%;
        }

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

    @state()
    protected _signedIn: Boolean = false;

    @state()
    protected _signInWith: SignInOptions = undefined;




    /**
     * States:
     * 
     * 1. _signedIn: default value false or 'logged out'. If user is logged in and screen exists, replace the 'nothing' in ternary operator below.
     * 
     * 2. _signInWith: denotes what log in option the user selected with options defined by the 'SignInOptions' type defined above.
     */

   userLogInFlow(){

        let screen: TemplateResult | undefined = undefined
        //Step 1: Check whether user is already logged in:
        if(!this._signedIn){

            //Step 2: User is not signed in. What option are they selecting to log in
            if(typeof this._signInWith === 'undefined'){
                screen = html`<home-screen @get_login_option=${(e: CustomEvent) => this._signInWith = e.detail}></home-screen>`
            } else if (this._signInWith === 'EMAIL'){
                screen = html`<email-login></email-login>`
            } else if (this._signInWith === 'CREATE ACCOUNT'){
                screen = html`<create-account></create-account>`
            }

        } else {
            screen = html`<p>You are logged in</p>`
        }
   }

    protected render(){
        console.log(this._signInWith)
        return html`
            <div class="container">
                <afscme-logo imgSrc=${Logo} imgAlt='AFSCME Logo' logoText='Member Portal'></afscme-logo>
                ${this.userLogInFlow()}
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "afscme-signin": AFSCMESignin;
    }
}