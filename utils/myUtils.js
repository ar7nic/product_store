export class MyUtils {

    static siteUrl = 'https://www.demoblaze.com/index.html';
    static randomString(){
        return (Math.random() + 1).toString(36).slice(-6);
    }
}
