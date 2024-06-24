const KEY_LOCAL = "user";

class localSevicer {
    get(){
        const data = localStorage.getItem(KEY_LOCAL)
        if(!data) return null;
        return JSON.parse(data)
    }
    set(data:object){
        return localStorage.setItem(KEY_LOCAL,JSON.stringify(data));
    }
    remove(){
        return localStorage.removeItem(KEY_LOCAL)
    }
}
const localStorageSevicer = new localSevicer();

export default localStorageSevicer;