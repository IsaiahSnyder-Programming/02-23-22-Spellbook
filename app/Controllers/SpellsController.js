import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";

async function _getSpells() {
    try {
        spellsService.getSpells()
    } catch (error) {
        console.error(error.message, 'error');
    }
}

function _drawSpellsList() {
    let template = ''
    ProxyState.apiSpells.forEach(s => template += `<li class="selectable" onClick="app.dndSpellsController.getActiveSpell('${s.index}')">${s.name}</li>`)
    document.getElementById('spell-list').innerHTML = template
}

export class SpellsController {
    constructor() {
        console.log('[SpellsController] loaded');
        _getSpells()
    }
}