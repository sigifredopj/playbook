// Ejemplo 8: Filtrar una lista por condicional


const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'S', score: 100 },
    { name: 'J', score: 100 }]

    const scoresGreaterEighty = scores.filter((score) => score.score > 80)
    const sum = scoresGreaterEighty.reduce((acc, curr) => acc + curr.score, 0)
    console.log(sum)