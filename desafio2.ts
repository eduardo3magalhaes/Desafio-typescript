
interface profissao {
    tipo: 'atriz' | 'padeiro';
}

type Humano = {
    nome: string,
    idade: number,
    
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    tipo: Atriz;
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    tipo: Padeiro;
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    tipo: Atriz;
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    tipo: Padeiro;
}