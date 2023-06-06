import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import {SignInWithEmail} from '../settings.json'
import '../components/button'
import '../components/input-field'

@customElement('email-login')
export class EmailLogin extends LitElement{
    static styles = css`
        :host{
            margin: 2em 1em 0 1em;
        }

        p{
            font-family: var(--Poppins);
            font-size: var(--font-size-sm);
            color: var(--blue);
        }

        .btn-group{
            display: flex;
            align-items: center;
            justify-content: space-around;
            
        }
    
    `

    protected render(){
        return html`
            <p>${SignInWithEmail.helpText}</p>
            <input-field fieldLabel='Email:' inputId='email' inputType='email'></input-field>
            <input-field fieldLabel='Password:' inputId='password' inputType='password'></input-field>
            <div class="btn-group">
                <custom-button buttonIcon="carbon:home" buttonText="Home" primary @click=${() => console.log('Go home')}></custom-button>
                <custom-button buttonIcon="ph:sign-in" buttonText="Sign In" ButtonIconPosition="right" secondary></custom-button>
            </div>
        `
    }

   
}

declare global {
    interface HTMLElementTagNameMap {
        "email-login": EmailLogin;
    }
}