import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import './sso-service';

interface SSOServiceItem {
    'iconify-logo': string,
    'service-name': string,
}

@customElement('sso-list')
export class SSOList extends LitElement{

    static styles = css`
        div .no-label:nth-of-type(2){
            margin: 0 0.5em;
        }

        div .no-label:nth-of-type(4){
            margin-left: 0.5em;
        }

        .labelled-btns{
            display: flex;
            flex-direction: column;
        }

        .labelled-btns sso-service:nth-of-type(2){
            margin: 0.5em 0;
        }

        .labelled-btns sso-service:nth-of-type(4){
            margin-top: 0.5em;
        }

        @media (min-width: 768px){
            .labelled-btns{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
                grid-gap: 1em;
                width: 336px;
            }

            .labelled-btns sso-service:nth-of-type(2){
                margin: 0;
            }

            .labelled-btns sso-service:nth-of-type(4){
                margin: 0;
            }
        }

    `

    @property({type: Boolean})
    showServiceNames: boolean = false;

    @property()
    listOfSSOServices!: Array<SSOServiceItem> 

    constructor(){
        super()

        this.listOfSSOServices =  [
            {'iconify-logo': 'logos:facebook', 'service-name': 'Facebook'},
            {'iconify-logo': 'logos:microsoft-icon', 'service-name': 'Microsoft'},
            {'iconify-logo': 'flat-color-icons:google', 'service-name': 'Google'},
            {'iconify-logo': 'logos:apple', 'service-name': 'Apple'},
        ]
    }

    protected render(){
        
        return html
            `<div class = ${this.showServiceNames && 'labelled-btns'}>
            ${this.listOfSSOServices.map(service => {
            return html`<sso-service serviceLogo=${service["iconify-logo"]} 
                                     serviceName=${service["service-name"]}
                                     serviceLogoEnlarged
                                     ?showServiceName=${this.showServiceNames}
                                     class=${!this.showServiceNames && 'no-label'}>
                        </sso-service>`
            })}</div>` 

    }
}

declare global {
    interface HTMLElementTagNameMap {
      "sso-list": SSOList;
    }
}