import {db} from "@/firebase";

export class Url {

    constructor() {
        this.URLdb = db.collection("urls")
    }

    async storeURL(url) {
        const docRef = await this.URLdb.add({
            url
        })

        return  docRef.id
    }

    // async checkHashExists(hash){
    //     const res = await db.collection("urls").where("hash", "==", hash).get()
    //     return res.docs.length !== 0
    // }

    async getHashUrl(hash){
        return await db.doc(`urls/${hash}`).get()
    }

}
