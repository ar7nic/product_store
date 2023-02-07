
class User {
    userName;
    userPassword;
    constructor(userName, userEmail, userPassword, userCountry, userCity, userCrCard, hashPassword){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userCountry = userCountry;
        this.userCity = userCity;
        this.userCrCard = userCrCard;
        this.hashPassword = hashPassword;

    }

}
export const USERS = {
    testUser : new User("ar7nic","ar7nic@mail.com", "storePassword", "Ukraine", "Cherkasy", "1111222233334444","c3RvcmVQYXNzd29yZA=="),
}
