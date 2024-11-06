export class CharacterCard {
    constructor(character, range) {
        this.character = character;
        this.range = range;
    }

    createCard() {
        const colorClass = this.getColorClass();
        return `
            <div class="single-timeline-content">
                <div class="timeline-icon ${colorClass}"></div>
                <div class="timeline-text">
                    <h6>${this.character.name}</h6>
                    <p>Estatura: ${this.character.height} cm</p>
                    <p>Peso: ${this.character.mass} kg</p>
                </div>
            </div>
        `;
    }

    getColorClass() {
        if (this.range === "1-5") return "red-circle";
        if (this.range === "6-10") return "green-circle";
        if (this.range === "11-15") return "blue-circle";
        return "default-circle";
    }
}

