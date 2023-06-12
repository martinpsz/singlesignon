import { LitElement, html, css} from "lit";
import {customElement, state} from "lit/decorators.js"
import Logo from './static/afscme.svg'
import './components/afscme-logo.js'
import './components/Screens/home-screen'


/**
 *  Sign in option: SSO/Email or Create Account?
 * 
 *  Create Account: 
 *      First, get email + password
 *      Second, verify membership (one of three options) - collect info for option
 *      Member ? Code : call member services
 * 
 *  SSO/Email:
 * 
 *      Exact match for email in system ? 'Signed In' : 
 *      Get 2nd code from Cognito or Create Account steps
 *      
 *
 */




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
                padding: 0 5em 2.5em; 
                border-radius: 0.5em;
            }
        }
    
    `


    protected render(){
        return html`
            <div class="container">
                <afscme-logo imgSrc=${Logo} imgAlt='AFSCME Logo' logoText='Member Portal'></afscme-logo>
                <home-screen></home-screen>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "afscme-signin": AFSCMESignin;
    }
}