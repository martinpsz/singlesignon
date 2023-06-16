import { LitElement, html, css, nothing } from "lit";
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
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        div{
            display: flex;
            flex-direction: column;
            margin: 2em;
        }

        section-directions{
            margin-top: 1em;
        }

        #btn-group{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            border: 1px solid red;
            margin: 2em 0 3em;
        }

        @media (min-width: 768px){
            custom-link{
                padding-bottom: 1em;
            }
        }
        
    `

    @property()
    email!: string;

    @property()
    email_warning!: string;

    @property()
    password!: string;

    protected render(){
        const helpText = SignInWithEmail.SignInWithEmail.helpText
        return html`
            <div>
                <section-directions helpText=${this.email_warning ? 'Please clear errors and try submitting again' : helpText}></section-directions>
                <input-field fieldLabel='Email:' 
                                inputType="email"
                                inputId='Email' 
                                required
                                @getInputValue=${(e: CustomEvent) => this._getInputValue(e, 'Email')}
                                warning=${this.email_warning ? this.email_warning : nothing}></input-field>
                <input-field fieldLabel='Password:' inputType='password' inputId='Password' required @getInputValue=${(e: CustomEvent) => this._getInputValue(e, 'Password')}></input-field>
                <custom-link linkText='Forgot Password' linkType='need help'></custom-link>
                <div id='btn-group'>
                    <custom-button leftIcon='carbon:home' buttonText='Home' btnPrimary></custom-button>
                    <custom-button rightIcon='carbon:login' buttonText='Sign In' btnSecondary type="submit" @click=${this._handleEmailLogin}></custom-button>
                </div>
                <custom-link linkText='Create an account'></custom-link>
        </div>
        `
    }

    _getInputValue = (e: CustomEvent, field: string) => {
        if(field === 'Email'){
            this.email = e.detail;
        }

        if(field === 'Password'){
            this.password = e.detail
        }
    }

    _handleEmailLogin = () => {
        const emailRegexPattern = new RegExp(/[\w\.]+@[\w]+\.[\w]{2,4}/gm)
        
        if(emailRegexPattern.test(this.email)){
            this.email_warning = ''
        } else {
            this.email_warning = 'Email appears invalid'
        }
    }

  
   
}


declare global {
    interface HTMLElementTagNameMap {
      "email-login": EmailLogin;
    }
}