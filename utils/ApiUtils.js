import {URLS} from "../const/baseConst";
import {v4 as uuidv4} from 'uuid';

const productId = uuidv4();
let token;
let requestPayload;

class ApiUtils {


    constructor() {
    }
    async getToken(request,loginPayload) {
        const loginResponse = await request.post(URLS.loginAPIUrl,{
            data:loginPayload
        });
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.split(":")[1].trim();
        return token;
    }
    async setTokenToCookies(context){
        await context.addCookies([{name:"tokenp_",value:token,url:URLS.siteUrl}]);
    }
    async addItemToCart(request,prodID){
        requestPayload = {id: productId, cookie: token, prod_id: prodID, flag: true};
        const apiResponse = await request.post(URLS.addItemAPIUrl,{
            data:requestPayload
        })

    }
}

export const APIUTILS = new ApiUtils();
