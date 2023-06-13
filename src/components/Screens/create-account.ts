import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import '../input-field'
import '../captcha-field'
import '../custom-button'
import '../SSO/sso-list'


@customElement('create-account')
export class CreateAccount extends LitElement{
    static styles = css`
        :host{
            padding: 1em;
            display: flex;
            flex-direction: column;
            
        }

        form input-field:nth-of-type(2){
            margin: 1.5em 0;
        }

        form input-field:nth-of-type(3){
            margin-bottom: 1.5em;
        }

        #btn-group{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 1em 0;
        }

        #sso-option p{
            font-family: var(--Poppins);
            color: var(--black);
            font-size: var(--font-size-sm);
        }

        @media (min-width: 768px){
            :host{
                width: 66.7%
            }
            form{
                display: flex;
                flex-direction: column;
            }
        }
    
    `

    protected render(){
        return html`
            <form>
                <input-field fieldLabel="Email:" inputType='email' inputId='email'></input-field>
                <input-field fieldLabel='Enter new password:' inputType='password' inputId='password'></input-field>
                <input-field fieldLabel='Re-enter new password:' inputType='password' inputId='password'></input-field>
                <captcha-field></captcha-field>
                <div id='btn-group'>
                    <custom-button leftIcon='carbon:home' buttonText="Home" btnPrimary></custom-button>
                    <custom-button rightIcon='carbon:document-signed' btnSecondary buttonText='Create Account'><custom-button>
                </div>
            </form>
            <div id="sso-option">
                <p>Or sign in with:</p>
                <sso-list></sso-list>
            </div>
        
        `
    }
}



declare global {
    interface HTMLElementTagNameMap {
      "create-account": CreateAccount;
    }
}