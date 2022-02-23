import { ProxyState } from "../AppState.js";
import { mySpellsService } from "../Services/MySpellsService.js";


async function _getMySpells() {
    try {
        await mySpellsService.getMySpells()
    } catch (error) {
        console.error(error);
    }
}

function _drawMySpells() {

}


export class MySpellsController {
    constructor() {
        console.log('[MySpellsController] Linked');
        // ProxyState.on('mySpells', _drawMySpells)
        _getMySpells()
    }

    async saveSpell() {
        try {
            await mySpellsService.saveSpell()
        } catch (error) {
            console.error(error);
        }
    }
}