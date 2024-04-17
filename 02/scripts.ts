const usuarios2: {nome: string, idade: number, status: boolean}[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const filtroDeCombidados = (lista: {nome: string, idade: number, status: boolean}[], nome: string): {nome: string, idade: number, status: boolean}[] => {

let resultado: {nome: string, idade: number, status: boolean}[] = []

for(let usuario of lista){
    if (usuario.nome.includes(nome)) {
        resultado.push(usuario)
    }
}

return resultado
}

console.log(filtroDeCombidados(usuarios2, "Jo"));
