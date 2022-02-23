import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";

async function _getSpells() {
    try {
        await spellsService.getSpells()
    } catch (error) {
        console.error(error.message, 'error');
    }
}


function _drawSpellsList() {
    let template = ''
    ProxyState.apiSpells.forEach(s => template += `<li class="selectable" onClick="app.spellsController.getActiveSpell('${s.index}')">${s.name}</li>`)
    document.getElementById('spell-list').innerHTML = template
}

export class SpellsController {
    constructor() {
        console.log('[SpellsController] loaded');
        ProxyState.on('apiSpells', _drawSpellsList)
        _getSpells()
    }

    async getActiveSpell(index) {
        console.log(index);
    }
}