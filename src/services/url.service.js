import {db} from "@/firebase";

export class Url {

    constructor() {
        this.URLdb = db.collection("urls")
    }

    async storeURL(url) {
        const exist = await this.isExistThenReturn(url)

        if (exist[0]){
            return exist[1]
        }else{
            const docRef = await this.URLdb.add({
                url
            })
            return  docRef.id
        }
        // const urlExist =
        // const isExist = await urlExist(url)
        // console.log(isExist)

    }

    async isExistThenReturn(url) {
        const record = await this.URLdb.where("url", "==", url).get()

        if (record.docs.length !== 0){
            return [true, record.docs[0].id]
        }else{
            return [false, undefined]
        }
    }

    async getHashUrl(hash){
        return await db.doc(`urls/${hash}`).get()
    }

}
