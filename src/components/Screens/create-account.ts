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
            display: flex;
            flex-direction: column;
            margin-bottom: 1em;
            width: 100%;
        }

        .form-wrapper{
            width: calc(100% - 2em);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }

        .form-wrapper > *{
            margin-top: 1.5em;
        }
        
        #btn-group{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1.5em;
        }

        #sso-option p{
            font-family: var(--Poppins);
            color: var(--black);
            font-size: var(--font-size-sm);
        }

        @media (min-width: 768px){
            .form-wrapper{
                width: calc(100% - 4em);
                margin: 0 auto;
            }

            #btn-group{
                justify-content: space-evenly;
            }
            
        }
    
    `

    protected render(){
        return html`
            <div class='form-wrapper'>
                <input-field fieldLabel="Email:" inputType='email' inputId='email'></input-field>
                <input-field fieldLabel='Enter new password:' inputType='password' inputId='password'></input-field>
                <input-field fieldLabel='Re-enter new password:' inputType='password' inputId='password'></input-field>
                <captcha-field></captcha-field>
                <div id='btn-group'>
                    <custom-button leftIcon='carbon:home' buttonText="Home" btnPrimary
                    @click=${()=> {this.dispatchEvent(new CustomEvent('InnerNavigationEvent', 
                    {detail: 'HOME SCREEN',
                     composed: true,
                     bubbles: true}))}}></custom-button>
                    <custom-button rightIcon='carbon:document-signed' btnSecondary buttonText='Create Account'><custom-button>
                </div>
                <div id="sso-option">
                    <p>Or sign in with:</p>
                    <sso-list></sso-list>
                </div>
            </div>
        `
    }
}



declare global {
    interface HTMLElementTagNameMap {
      "create-account": CreateAccount;
    }
}