import { LitElement, html, css } from "lit";
import { customElement, property} from "lit/decorators.js";
import '../section-directions'
import '../input-field'
import '../custom-link'
import '../custom-button'
import SignInWithEmail from '../../settings.json'


@customElement('email-login')
export class EmailLogin extends LitElement{
    static styles = css`
        :host{
            padding: 0 1em;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2em;
        }

        section-directions{
            margin-top: 1em;
        }

        .form-wrapper{
            width: calc(100% - 1em);
            display: flex;
            flex-direction: column;
        }

        .form-wrapper > *{
            margin-top: 1.5em;
        }

        .form-wrapper input-field:nth-of-type(1){
            margin-top: 1em;
        }

        #needHelp{
            align-self: flex-end;
            margin-top: 0.4em;
        }


        #btn-group{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin: 2em 0 3em;
        }
        
        @media (min-width: 768px){
            :host{
                padding: 1em;
            }

            .form-wrapper{
                width: calc(100% - 2em);
            }
        }
    `

    @property()
    updateScreenState!: string

    @property()
    email!: string

    @property()
    password!: string;

    protected render(){
        const helpText = SignInWithEmail.SignInWithEmail.helpText
        return html`
            <section-directions helpText=${helpText}></section-directions>
            <div class='form-wrapper'>
                <input-field fieldLabel='Email:' inputType='email' inputId='Email' @getInputValue=${(e: CustomEvent) => this.email = e.detail}></input-field>
                <input-field fieldLabel='Password:' inputType='password' inputId='Password' @getInputValue=${(e: CustomEvent) => this.password = e.detail}></input-field>
                <custom-link linkText='Forgot Password' linkType='need help' id='needHelp' @click=${() => {this.updateScreenState = 'RESET PASSWORD'}}></custom-link>
                <div id='btn-group'>
                    <custom-button leftIcon='carbon:home' buttonText='Home' btnPrimary @click=${()=> {this.dispatchEvent(new CustomEvent('InnerNavigationEvent', 
                    {detail: 'HOME SCREEN',
                     composed: true,
                     bubbles: true}))}}></custom-button>
                    <custom-button rightIcon='carbon:login' buttonText='Sign In' btnSecondary @click=${this._formSubmissionHandler}></custom-button>
                </div>
            </div>
            <custom-link linkText='Create an account' @click=${()=> {this.dispatchEvent(new CustomEvent('InnerNavigationEvent', 
            {detail: 'CREATE AN ACCOUNT',
             composed: true,
             bubbles: true}))}}></custom-link>
        `
    }

    _formSubmissionHandler = (e: Event, email = this.email, password = this.password) => {
        e.preventDefault()
        //using email and password, attempt to sign in and return result here.
    }

}


declare global {
    interface HTMLElementTagNameMap {
      "email-login": EmailLogin;
    }
}