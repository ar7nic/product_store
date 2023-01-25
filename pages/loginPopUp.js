import {SiteElement} from "../utils/SiteElement";
const pageName = 'Login Pop-up';
export class LoginPopUp {

    loginUserNameInput = new SiteElement('Name input', pageName,"//input[@id='loginusername']");
    loginPasswordInput = new SiteElement('Password input', pageName,"//input[@id='loginpassword']");
    loginButton = new SiteElement('Login button',pageName, "//button[contains(text(),'Log in')]");

    // loginUserNameInput = "//input[@id='loginusername']";
    // loginPasswordInput = "//input[@id='loginpassword']";
    // loginButton = "//button[contains(text(),'Log in')]";

}