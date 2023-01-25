import {SiteElement} from "../utils/SiteElement";
const pageName = "Main menu";
export class MainMenu {

    loginMenu = new SiteElement('Login menu',pageName,"//a[@id='login2']");
    signInMenu = new SiteElement('Sign In Menu',pageName,"//a[@id='signin2']");
    aboutUsMenu = new SiteElement('About Us Menu',pageName,"//a[contains(text(),'About us')]");
    cartMenu = new SiteElement('Cart Menu', pageName,"//a[@id='cartur']");
    welcomeMenu = new SiteElement('User account Menu',pageName,"//a[@id='nameofuser']");

    // contactMenu = "//a[@data-target='#exampleModal']";
    // loginMenu = "//a[@id='login2']";
    //
    // signInMenu = "//a[@id='signin2']";
    // aboutUsMenu = "//a[contains(text(),'About us')]";
    // cartMenu = "//a[@id='cartur']";
    // welcomeMenu = "//a[@id='nameofuser']";
}