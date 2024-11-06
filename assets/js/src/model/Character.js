export class Character {
    #id;
    #name;
    #height;
    #mass;

    constructor(id, name, height, mass) {
        this.#id = id;  
        this.#name = name;
        this.#height = height;
        this.#mass = mass;
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get height() {
        return this.#height;
    }
    get mass() {
        return this.#mass;
    }

    static createCharacter(characterData) {
        try {
            const { id, name, height, mass } = characterData;
            return new Character(id, name, height, mass);
        } catch (error) {
            console.error(error);
            return null; 
        }
    }
}


