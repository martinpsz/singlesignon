import { LitElement, html} from "lit";
import {customElement} from "lit/decorators.js"
import Logo from './static/afscme.svg'
import './components/afscme-logo.js'
//import AFSCMELogo from "./static/afscme.svg";




@customElement("afscme-signin")
export class AFSCMESignin extends LitElement{
    
    

    

    protected render(){
        return html`
        <div class="container">
           <afscme-logo imgSrc=${Logo} imgAlt='AFSCME Logo' logoText='Member Portal'></afscme-logo>
        
        </div>`
    }
}