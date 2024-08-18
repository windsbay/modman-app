import { makeAutoObservable } from "mobx";

export default class ReferalStore {
    constructor() {
        this._referals = [
            {user_id: 124325443, referer: null, balance: 100},
            {user_id: 124325223, referer: 124325443, balance: 100},
            {user_id: 124325113, referer: 124325223, balance: 500},
        ]
        makeAutoObservable(this)
    }
}