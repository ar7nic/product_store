import {LoginAssistant} from "./loginAssistant";
import {CartAssistant} from "./cartAssistant";
import {OrderAssistant} from "./orderAssistant";

export class Assistants {
   static loginAssistant = new LoginAssistant();
   static cartAssistant = new CartAssistant();
   static orderAssistant = new OrderAssistant();
}

