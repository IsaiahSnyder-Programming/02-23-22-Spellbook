import { ProxyState } from "../AppState.js";
import { Spell } from "../Models/Spell.js";
import { dndApi } from "./AxiosService.js"

class SpellsService {

    async getSpells() {
        const res = await dndApi.get()
        console.log(res.data);
        ProxyState.apiSpells = res.data.results
    }

    async getActiveSpell(index) {
        const res = await dndApi.get(index)
        console.log(res.data);
        ProxyState.activeSpell = new Spell(res.data)
    }

}

export const spellsService = new SpellsService()