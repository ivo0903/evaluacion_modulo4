import {CharacterGenerator} from './utils/CharacterGenerator.js';
import {CharacterDisplay} from './render/CharacterDisplay.js';

class CharacterViewer {
    static initializeCharacterFetch() {
        document.querySelectorAll('.linea-tiempo-intervalos').forEach(item => {
            const [start, end] = item.getAttribute('data-range').split('-').map(Number);
            const containerId = `range-${start}-${end}`;
            const characterGenerator = CharacterGenerator.fetchCharacters(start, end);
            const range = item.getAttribute('data-range');

            const display = new CharacterDisplay(containerId, characterGenerator, range);
            
            
            const ladoDerecho = item.querySelector('.contenido-lado-derecho');
            const ladoIzquierdo = item.querySelector('.contenido-lado-izquierdo');

            if (ladoDerecho) {
                ladoDerecho.addEventListener('click', () => {
                    display.displayCharacter();
                });
            }

            if (ladoIzquierdo) {
                ladoIzquierdo.addEventListener('click', () => {
                    display.displayCharacter();
                });
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    CharacterViewer.initializeCharacterFetch();
});

