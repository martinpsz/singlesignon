import { LitElement, html, css } from "lit";
import { customElement} from "lit/decorators.js";
import '../section-directions'
import '../input-field'
import '../custom-link'
import '../custom-button'
import SignInWithEmail from '../../settings.json'


@customElement('email-login')
export class EmailLogin extends LitElement{
    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            align-items: center;
            //width: clamp(17rem, 16.714rem + 1.429vw, 18rem);
            
        }

        section-directions{
            margin-top: 1em;
        }

        form{
            display: flex;
            flex-direction: column;
            
        }

        form input-field:nth-of-type(1){
            margin: 1.5em 0 2em;
        }

        form custom-link{
            align-self: flex-end;
            //margin-top: 0.25em;
            
        }

        #btn-group{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2em 0 3em;
        }

        @media (min-width: 768px){
            custom-link{
                padding-bottom: 1em;
            }
        }
        
        
    `

    protected render(){
        const helpText = SignInWithEmail.SignInWithEmail.helpText
        return html`
            <section-directions helpText=${helpText}></section-directions>
            <form>
                <input-field fieldLabel='Email:' inputType='email' inputId='Email'></input-field>
                <input-field fieldLabel='Password:' inputType='password' inputId='Password' ></input-field>
                <custom-link linkText='Forgot Password' linkType='need help'></custom-link>
                <div id='btn-group'>
                    <custom-button leftIcon='carbon:home' buttonText='Home' btnPrimary></custom-button>
                    <custom-button rightIcon='carbon:login' buttonText='Sign In' btnSecondary></custom-button>
                </div>
            </form>
            <custom-link linkText='Create an account'></custom-link>
        `
    }
}


declare global {
    interface HTMLElementTagNameMap {
      "email-login": EmailLogin;
    }
}