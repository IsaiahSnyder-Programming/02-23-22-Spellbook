
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
        <div class="col-12 bg-light shadow">
            <div class="text-center">
                <h2>${this.name}</h2>
                <h4>${this.duration} | Level: ${this.level} | ${this.range}</h4>
                <p class="text-start">${this.desc}</p>
                <div class="d-flex justify-content-between align-items-baseline">

                </div>
            </div>
        </div>
        `
    }
}