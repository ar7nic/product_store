
class User {
    userName;
    userPassword;
    constructor(userName, userPassword, userCountry, userCity, userCrCard){
        this.userName = userName;
        this.userPassword = userPassword;
        this.userCountry = userCountry;
        this.userCity = userCity;
        this.userCrCard = userCrCard;
    }

}
export const USERS = {
    testUser : new User("ar7nic","storePassword", "Ukraine", "Cherkasy", "1111222233334444"),
}
