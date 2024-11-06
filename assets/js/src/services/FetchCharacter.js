import {Character} from '../model/Character.js';

const BASE_URL = "https://swapi.dev/api/";

export class FetchCharacter {
    static async fetchCharacterData(id) {
        try {
            const response = await fetch(`${BASE_URL}people/${id}/`);
            if (!response.ok) throw new Error(`Error al traer al personaje de Star Wars ${id}`);
            const data = await response.json();
            return Character.createCharacter(data); 
        } catch (error) {
            console.error(error);
            return null; 
        }
    }
}


