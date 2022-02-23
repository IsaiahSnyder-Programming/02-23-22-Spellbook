import { ProxyState } from "../AppState.js";
import { Spell } from "../Models/Spell.js";
import { sandboxApi } from "./AxiosService.js"


class MySpellsService {

    async getMySpells() {
        const res = await sandboxApi.get()
        console.log(res.data);
        ProxyState.mySpells = res.data.map(s => new Spell(s))
    }

    async saveSpell() {
        this.formatDescription()
        const res = await sandboxApi.post('', ProxyState.activeSpell)
        console.log('[MySpellsService] saveSpell', res.data);
        ProxyState.mySpells = [...ProxyState.mySpells, new Spell(res.data)]
    }

    formatDescription(){
        let formattedDescrtiption = ''
        ProxyState.activeSpell.description.forEach(d => formattedDescrtiption += d)
        ProxyState.activeSpell.description = formattedDescrtiption
    }
}

export const mySpellsService = new MySpellsService()