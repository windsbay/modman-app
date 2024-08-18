import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._user = {
            user_id: 5472695896,
            referer: null,
            balance: 10000
        }
        this.rewards = {
            balance: 10000
        }
        makeAutoObservable(this)
    }

    setUser(user) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}