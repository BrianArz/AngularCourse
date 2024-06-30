
// function addNumbers(a: number, b: number) {
//     return a + b;
// }

// const addNumbersArrow = (a: number, b: number): string => {
//     return `${a + b}`;
// }

// function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
//     return firstNumber * base;
// }

// const result = addNumbers(1, 2);
// const resultTwo = addNumbersArrow(1, 2);
// const multiplyResult = multiply(5);

// console.log({ result, resultTwo, multiplyResult });

interface Character {
    name: string,
    hp: number,
    showHp: () => void;
}

const healCharacter  = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const arz: Character = {
    name: 'Arz',
    hp: 50,
    showHp() {
        console.log(`Health points: ${this.hp}`);
    }
}

healCharacter(arz, 10);
arz.showHp();

export {};