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

function _drawActiveSpell() {
    let spell = ProxyState.activeSpell
    if(spell.name) {
        document.getElementById('active-spell').innerHTML = ProxyState.activeSpell.Template
    }
}

export class SpellsController {
    constructor() {
        console.log('[SpellsController] loaded');
        ProxyState.on('apiSpells', _drawSpellsList)
        ProxyState.on('activeSpell', _drawActiveSpell)
        _getSpells()
    }

    async getActiveSpell(index) {
        try {
            await spellsService.getActiveSpell(index)
        } catch (error) {
            console.error(error);            
        }
    }
}