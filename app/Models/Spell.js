
export class Spell {
    constructor(data) {
        this.index = data.index,
        this.id = data.id || '',
        this.name = data.name,
        this.desc = data.description || data.desc,
        this.level = data.level,
        this.components = data.components,
        this.prepared = data.prepared || false
    }
    
    get Template() {
        return `
        <li class="selectable">${this.name}</li>
        `
    }
}