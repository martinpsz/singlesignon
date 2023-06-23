import {LitElement, html, css} from 'lit'
import { customElement} from 'lit/decorators.js'

@customElement('captcha-field')
export class CaptchaField extends LitElement{
    static styles = css`
        .captcha-wrapper{
            display: flex;
            align-items: center;
            border: 1px solid rgba(13,24,33, 0.2);
            border-radius: 0.25em;
            padding: 0.5em;
        }

        input{
            background: none;
            border: 1px solid var(--black);
            font-size: 0;
            line-height: 0;
            height: 16px;
            width: 16px;
        }

        input:active{
            background: var(--blue);
        }

        span{
            font-family: var(--Poppins);
            font-size: var(--font-size-sm);
            margin: 0 1.5em 0 0.25em;
        }

        
    
    `

    /**
     * 
     * waiting on answer to whether there is an AFSCME api key for captcha before further testing.
     */
    protected render(): unknown {
        return html`
            <div class='captcha-wrapper'>
                <input class='g-recaptcha'
                       type="submit"
                       data-sitekey='reCAPTCHA_site_key'
                       data-callback='onSubmit'
                       data-action='submit'
                       @click=${(e: SubmitEvent) => this._submitCaptcha(e)}/>
                <span>I am not a robot</span>
                <iconify-icon icon="logos:recaptcha" style="color: #ff331f; font-size: 32px;"></iconify-icon>
            </div>`
    }

    _submitCaptcha = (e: SubmitEvent) => {
        e.preventDefault();

        console.log(e)
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "captcha-field": CaptchaField;
    }
}