import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import '../section-directions'
import '../input-field'
import '../custom-link'
import '../custom-button'
import SignInWithEmail from '../../settings.json'


@customElement('email-login')
export class EmailLogin extends LitElement{
    protected render(){
        console.log(SignInWithEmail)
        return html`
            <section-directions helpText=${SignInWithEmail}></section-directions>
        `
    }
}


declare global {
    interface HTMLElementTagNameMap {
      "email-login": EmailLogin;
    }
}