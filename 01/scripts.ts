const usuarios: {nome: string, pets: string[]}[] = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

const buscarDonoPet = (lista: {nome: string, pets: string[]}[], nomePet: string): string => {
    let usuarioEncontrado: {nome: string, pets: string[]}  

    let flag: boolean = false

    usuarioEncontrado = lista[0]

    for (const usuario of lista) {
        if (usuario.pets.includes(nomePet)) {
            flag = true
            usuarioEncontrado = usuario;
        }
    }

    if (flag) {
        return `O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}`;
    }

    return `Que pena ${nomePet}, não encontramos seu dono(a)`;
    
}

console.log(buscarDonoPet(usuarios, 'Farofa'))