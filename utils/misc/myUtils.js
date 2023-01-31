export class MyUtils {

    static randomString(){
        return (Math.random() + 1).toString(36).slice(-6);
    }
}
