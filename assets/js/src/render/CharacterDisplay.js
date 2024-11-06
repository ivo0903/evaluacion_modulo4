import {CharacterCard} from '../components/CharacterCard.js';

export class CharacterDisplay {
    constructor(containerId, characterGenerator, range) {
        this.containerId = containerId;
        this.characterGenerator = characterGenerator;
        this.range = range;
    }

    async displayCharacter() {
        const container = document.getElementById(this.containerId);
        try {
            const character = await this.characterGenerator.next();
            if (!character.done) {
                const card = new CharacterCard(character.value, this.range);
                const cardHTML = card.createCard();
                container.innerHTML += cardHTML;
            } else {
                alert("No hay más personajes para mostrar en esta sección.");
            }
        } catch (error) {
            console.error(error);
            container.innerHTML += `<p>Error al cargar el personaje.</p>`;
        }
    }
}


