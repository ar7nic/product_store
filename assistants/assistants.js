import {LoginAssistant} from "./loginAssistant";
import {CartAssistant} from "./cartAssistant";
import {OrderAssistant} from "./orderAssistant";
import {PopupAssistant} from "./popupAssistant";

class Assistants {
    loginAssistant = new LoginAssistant();
    cartAssistant = new CartAssistant();
    orderAssistant = new OrderAssistant();
}

export const ASSISTANT = {
    loginAssistant : new LoginAssistant(),
    cartAssistant : new CartAssistant(),
    orderAssistant : new OrderAssistant(),
    popupAssistant : new PopupAssistant(),
}

// new Assistants();

// export const USERS = {
//    testUser : new User("ar7nic","storePassword", "Ukraine", "Cherkasy", "1111222233334444"),
// }