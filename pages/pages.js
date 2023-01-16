import {AboutPage} from "./aboutPage";
import {CategoriesPage} from "./categoriesPage";
import {LoginPage} from "./loginPage";
import {PaginationPage} from "./paginationPage";
import {SignInPage} from "./signInPage";
import {ContactPage} from "./contactPage";
import {CartPage} from "./cartPage";
import {ProductPage} from "./productPage";

export class Pages {
    aboutPage = new AboutPage();
    categoriesPage = new CategoriesPage();
    loginPage = new LoginPage();
    paginationPage = new PaginationPage();
    signInPage = new SignInPage();
    contactPage = new ContactPage();
    cartPage = new CartPage();
    productPage = new ProductPage();

}

export const PAGES = new Pages();