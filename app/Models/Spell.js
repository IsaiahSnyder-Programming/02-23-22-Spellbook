
export class Spell {
    constructor(data) {
        this.index = data.index,
        this.id = data.id || '',
        this.name = data.name,
        this.duration = data.duration,
        this.range = data.range,
        this.description = data.description || data.desc
        this.level = data.level,
        this.components = data.components,
        this.prepared = data.prepared || false
    }
    
    get Template() {
        return `
        <div class="col-12 bg-light shadow">
            <div class="text-center">
                <h2>${this.name}</h2>
                <h4>Lasts: ${this.duration} | Level: ${this.level} | Range: ${this.range}</h4>
                <p class="text-start">${this.description}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    ${this.Button}
                </div>
            </div>
        </div>
        `
    }

    get MyTemplate() {
        return`
        <div class="rounded p-2">
            <b class="text-center w-100">${this.name}</b><br/>
            <input type="checkbox" ${this.prepared ? "checked" : ""} onclick="app.spellsController.prepareSpell('${this.id}')">
            <button class="btn selectable" onclick="app.spellsController.setActiveSpell('${this.id}')"> See Details </button>
        </div>
        `
    }

    get Button() {
        let button = ''
        if(this.id) {
            button = `<button class="btn btn-danger" onclick="app.mySpellsController.removeSpell()">Remove From Spell Book</button>`
        } else {
            button = `<button class="btn btn-primary" onclick="app.mySpellsController.saveSpell()">Save To Spell Book</button>`
        }
        return button
    }
}