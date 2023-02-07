import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = "Main menu";
export class MainMenu {

    loginMenu = new SiteElement('Login menu',pageName,"//a[@id='login2']");
    signInMenu = new SiteElement('Sign In Menu',pageName,"//a[@id='signin2']");
    aboutUsMenu = new SiteElement('About Us Menu',pageName,"//a[contains(text(),'About us')]");
    cartMenu = new SiteElement('Cart Menu', pageName,"//a[@id='cartur']");
    welcomeMenu = new SiteElement('User account Menu',pageName,"//a[@id='nameofuser']");
    contactMenu = new SiteElement('Contact Menu',pageName,"//a[@data-target='#exampleModal']");

}