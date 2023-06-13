import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import '../input-field'
import '../custom-button'

@customElement('member-search')
export class MemberSearch extends LitElement{
  static styles = css`
      :host{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
      }

      form{
        margin-top: 1.5em;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      form input-field:nth-of-type(even){
        margin: 1.5em 0;
      }
      #btn-group{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
      }
  
  `

  protected render(){
    return html`
      <form>
        <input-field fieldLabel='Full Name:' inputType='text' inputId='name'></input-field>
        <input-field fieldLabel='Zip Code:' inputType='number' inputId='zip_code'></input-field>
        <input-field fieldLabel='Email:' inputType='email' inputId='email'></input-field>
        <input-field fieldLabel='Phone:' inputType='tel' inputId='telephone'></input-field>
      </form>
      <div id='btn-group'>
        <custom-button leftIcon='carbon:chevron-left' buttonText='Back' btnPrimary></custom-button>
        <custom-button rightIcon='carbon:search' buttonText='Search' btnSecondary></custom-button>
      </div>
    
    `
  }
}



declare global {
    interface HTMLElementTagNameMap {
      "member-search": MemberSearch;
    }
}