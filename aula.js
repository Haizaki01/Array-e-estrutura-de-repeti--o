// .push() = Serve para adicionar um valor ao array existente, ou seja
// .pop() = Serve para remover o ultimo valor do array 
// .shift() remove o primeiro valor do array

// const Alunos = ["Gustavo", "Adriana", "André"]
// alunos.push("Eduardo")
// o array ficará assim: ["Gustavo", "Adriana", "André", "Eduardo"]
// alunos.pop()
// o array ficará assim: ["Gustavo", "Adriana", "André"]
// alunos.shift()
// o array ficará assim: ["Adriana", "André"]

const notas = []


notas.push(5)
notas.push(9)
notas.push(2)
notas.push(8)
notas.push(6)

let soma = 0

for (let  i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma+nota;
}

const media = soma / notas.length;
console.log(`A média é ${media}`)
