import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import '../SSO/sso-list';
import '../custom-link';

@customElement('home-screen')
export class HomeScreen extends LitElement{
    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        p{
            font-family: var(--Poppins);
            color: var(--black);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-light);
            font-style: italic;
            text-transform: uppercase;
            margin: 2em 0 1em;
        }

        #non-sso-links{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 4em;
        }

        #non-sso-links custom-link:nth-of-type(1){
            margin-bottom: 1em;
        }

        @media (min-width: 768px){
            #non-sso-links{
                flex-direction: row;
                width: 100%;
                justify-content: space-evenly;
           }

            #non-sso-links custom-link:nth-of-type(1){
                margin-bottom: 0;
            }

        }

    
    `

    protected render(){
        return html`
            <p>Sign in with:</p>
            <sso-list showServiceNames></sso-list>
            <div id='non-sso-links'>
                <custom-link linkText='Login with email'></custom-link>
                <custom-link linkText='Create an account'></custom-link>
            </div>

        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "home-screen": HomeScreen;
    }
}