import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import '../input-field'
import '../custom-button'
import '../section-directions'
import MemberSearchSettings from '../../settings.json'

const testMember = {
  member_id: 12345678,
  email: 'jsmith@afscme.org',
  phone: '563-234-2412',
  zipCode: 22204,
  fullName: 'Jack Smith'
}
@customElement('member-search')
export class MemberSearch extends LitElement{
  static styles = css`
      :host{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1em;
        margin-bottom: 2em;
      }

      .form-wrapper{
        display: flex;
        flex-direction: column;
        width: calc(100% - 1em);
      }

      .form-wrapper > * {
        margin-top: 1.5em;
      }

      fieldset{
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(13, 24, 33, 0.25);
      }

      fieldset input-field:nth-of-type(2){
        margin: 1.5em 0;
      }

      fieldset legend{
        font-family: var(--Poppins);
        font-size: var(--font-size-sm);
        color: var(--black);
      }

      custom-button{
        align-self: flex-end;
      }

      @media (min-width: 768px){
        .form-wrapper{
          width: calc(100% - 2em);
        }
      }
  `

  @property()
  fullName!: string;

  @property()
  zipCode!: number;

  @property()
  email!: string;

  @property()
  phone!: string;

  protected render(){
    const helpText = MemberSearchSettings.MemberSearchSettings.helpText
    return html`
        <section-directions helpText=${helpText}></section-directions>
        <div class='form-wrapper'>
          <input-field fieldLabel='Member ID# (optional):' inputType='text' inputId='member_id'></input-field>
          <input-field fieldLabel='Full Name:' inputType='text' inputId='name' @getInputValue=${(e:CustomEvent) => {this.fullName = e.detail.toLowerCase()}}></input-field>
          <input-field fieldLabel='Zip Code:' inputType='number' inputId='zip_code' @getInputValue = ${(e: CustomEvent) => {this.zipCode = parseInt(e.detail)}}></input-field>
          <fieldset>
          <legend>Enter <u>one</u> of the following:</legend>
          <input-field fieldLabel='Email:' inputType='email' inputId='email' @getInputValue=${(e:CustomEvent) => {this.email = e.detail.toLowerCase()}}></input-field>
          <input-field fieldLabel='Phone:' inputType='tel' inputId='telephone' @getInputValue=${(e:CustomEvent) => {this.phone = e.detail}}></input-field>
          </fieldset>
          <custom-button rightIcon='carbon:search' buttonText='Search' btnSecondary
          @click=${this._handleFormSubmission}></custom-button>
        </div>
    `
  }

  _handleFormSubmission = () => {
      let memberVerified: boolean = false;
      if(testMember.fullName.toLowerCase() === this.fullName && 
         testMember.zipCode === this.zipCode && 
         (testMember.email === this.email || 
          testMember.phone === this.phone)){
            memberVerified = true
      } else {
        memberVerified = false
      }

      this.dispatchEvent(new CustomEvent('memberSearchResult', {
        detail: memberVerified,
        composed: true,
        bubbles: true
      }))
  }
}



declare global {
    interface HTMLElementTagNameMap {
      "member-search": MemberSearch;
    }
}