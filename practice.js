let order1 = (callProduction, ) => {
    console.log('order 1 placed, now calling production');
    callProduction()
}
let production = async() => {
    console.log('process of production started');
}
order1(production)