import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = 'Sign-in pop-up'
export class SignInPopUp {

    signInUserNameInput = new SiteElement('User name input',pageName,"//input[@id='sign-username']");
    signInPasswordInput = new SiteElement('User password input',pageName,"//input[@id='sign-password']");
    signUpButton = new SiteElement('Sign-in button',pageName,"//button[contains(text(),'Sign up')]");
    signInModal = new SiteElement('Sign-in pop-up',pageName,"//div[@id='signInModal']")


}