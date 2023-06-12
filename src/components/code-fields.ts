import { LitElement, TemplateResult, html, css} from "lit";
import { customElement, property} from "lit/decorators.js";

@customElement('code-fields')
export class CodeFields extends LitElement{
    static styles = css`
        input{
            border: none;
            border-bottom: 1px solid var(--black);
            width: 2em;
            font-family: var(--Poppins);
            color: var(--black);
            text-align: center;
        }

        input:not(:first-of-type){
            margin-left: 0.25em;
        }

        input:focus{
            outline: transparent;
        }
    
    `

    @property()
    inputLength: number = 6;

    protected render(){
        const inputFields: Array<TemplateResult> = [] 
        for(let i = 0; i < this.inputLength; i++){
            inputFields.push(html`<input id=${`field-${i}`} type='text' maxLength=1/>`)
        }

        return html`
            ${inputFields}
        `
    }


    /**
     * To do: add function to jump to next input when max text length is reach in current input.
     */
    
}

declare global {
    interface HTMLElementTagNameMap {
      "code-fields": CodeFields;
    }
}