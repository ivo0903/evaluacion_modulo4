import {FetchCharacter} from '../services/FetchCharacter.js';

export class CharacterGenerator {
    static async *fetchCharacters(rangeStart, rangeEnd) {
        for (let id = rangeStart; id <= rangeEnd; id++) {
            const character = await FetchCharacter.fetchCharacterData(id);
            if (character) {
                yield character;
            }
        }
    }
}



