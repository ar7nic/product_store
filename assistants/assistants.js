import { LoginAssistant } from "./loginAssistant";
import { CartAssistant } from "./cartAssistant";
import { OrderAssistant } from "./orderAssistant";
import { PopupAssistant } from "./popupAssistant";
import { SignInAssistant } from "./signInAssistant";

// class Assistants {
//     loginAssistant = new LoginAssistant();
//     cartAssistant = new CartAssistant();
//     orderAssistant = new OrderAssistant();
// }

export const ASSISTANTS = {
  loginAssistant: new LoginAssistant(),
  cartAssistant: new CartAssistant(),
  orderAssistant: new OrderAssistant(),
  popupAssistant: new PopupAssistant(),
  signInAssistant: new SignInAssistant(),
};
