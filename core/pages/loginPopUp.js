import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = 'Login Pop-up';
export class LoginPopUp {

    loginUserNameInput = new SiteElement('Name input', pageName,"//input[@id='loginusername']");
    loginPasswordInput = new SiteElement('Password input', pageName,"//input[@id='loginpassword']");
    loginButton = new SiteElement('Login button',pageName, "//button[contains(text(),'Log in')]");
    loginModal = new SiteElement('Login modal window',pageName, "//div[@id='logInModal']");


}