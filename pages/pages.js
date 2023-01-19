import {AboutPopUp} from "./aboutPopUp";
import {CategoriesPage} from "./categoriesPage";
import {LoginPopUp} from "./loginPopUp";
import {PaginationPage} from "./paginationPage";
import {SignInPopUp} from "./signInPopUp";
import {ContactPopUp} from "./contactPopUp";
import {CartPage} from "./cartPage";
import {ProductPage} from "./productPage";
import {OrderPopup} from "./orderPopup";
import {MainMenu} from "./mainMenu";

class Pages {
    aboutPage = new AboutPopUp();
    categoriesPage = new CategoriesPage();
    loginPage = new LoginPopUp();
    paginationPage = new PaginationPage();
    signInPopUp = new SignInPopUp();
    contactPage = new ContactPopUp();
    cartPage = new CartPage();
    productPage = new ProductPage();
    orderPopup = new OrderPopup();
    mainMenu = new MainMenu();
}

export const PAGES = new Pages();