import {AuthAsserts} from "./authAsserts";
import {CartAsserts} from "./cartAsserts";
import {AboutAsserts} from "./aboutAsserts";
import {CategoryAsserts} from "./categoryAsserts";
import {OrderAsserts} from "./orderAsserts";
import {PaginationAsserts} from "./paginationAsserts";
import {ProductAsserts} from "./productAsserts";
import {PopUpAsserts} from "./popUpAsserts";
import {ContactAsserts} from "./contactAsserts";

export const ASSERTS = {
    authAsserts : new AuthAsserts(),
    cartAsserts : new CartAsserts(),
    aboutAsserts : new AboutAsserts(),
    categoryAsserts : new CategoryAsserts(),
    orderAsserts : new OrderAsserts(),
    paginationAsserts : new PaginationAsserts(),
    productAsserts : new ProductAsserts(),
    popUpAsserts : new PopUpAsserts(),
    contactAsserts : new ContactAsserts()
}