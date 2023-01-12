import {AboutPage} from "./aboutPage";
import {CategoriesPage} from "./categoriesPage";
import {LoginPage} from "./loginPage";
import {PaginationPage} from "./paginationPage";
import {SignInPage} from "./signInPage";

export class Pages {
    aboutPage = new AboutPage();
    categoriesPage = new CategoriesPage();
    loginPage = new LoginPage();
    paginationPage = new PaginationPage();
    signInPage = new SignInPage();
}

export const PAGES = new Pages();