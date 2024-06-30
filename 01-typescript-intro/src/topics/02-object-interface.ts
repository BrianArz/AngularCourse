interface Character {
    name: string, 
    hp: number, 
    skills: string[],
    hometown?: string
}

const arz: Character = {
    name: 'Arz',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

arz.hometown = 'Rivendell';

console.table(arz);

export {};