import { ProxyState } from "../AppState.js";
import { Spell } from "../Models/Spell.js";
import { dndApi } from "./AxiosService.js"

class SpellsService {

    async getSpells() {
        const res = await dndApi.get()
        console.log(res.data);
        ProxyState.apiSpells = new Spell(res.data)
    }

}

export const spellsService = new SpellsService()