/* //you ask the waiter for your order
//the waiter get the orden
//the waiter get the orden through the  kitchen 
// chef prepare the food
//the waiter get the food to the table

//eggs with bacon 
    //open the eggs
    //get them to the pan
    //put sauce 
    //serve them
//Molletes
    //slice the pan
    //put frijoles
    //put cheese
    //put them on the oven 
    //serve them
//chilaquiles
    //put tortilla to the pan
    //put souce
    //serve them */

// eggs instructions:
const cowboyEggs = async() => {
    const ingredient = 'eggs';
    const openEggs = (ingredient) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ingredient === 'eggs') {
                    const result = `open ${ingredient} `;
                    console.log(result);
                    resolve(result)
                } else {
                    reject('invalid ingredient')
                }
            }, 1000)
        })
    }
    const friedEggs = (ingredient) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ingredient === 'open eggs') {
                    const result = `fried ${ingredient}`;
                    console.log(result);
                    resolve(result)
                } else {
                    reject('cannot be fried')
                }
            }, 2000)
        })
    }
    const placeSause = (ingredient) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ingredient === 'fried eggs') {
                    const result = `${ingredient} eggs to cowboys`;
                    console.log(result);
                    resolve(result)
                } else {
                    reject(`${ingredient} invalid`)
                }
            }, 2000)
        })
    }
    try {
        const eggsOpen = await openEggs(ingredient);
        const eggsFried = await friedEggs(eggsOpen);
        return await placeSause(eggsFried);
    } catch (error) {
        console.log('an error ocurred', error);
    }
}
cowboyEggs();
const order1 = cowboyEggs();
const oder2 = cookMolletes();
const order3 = cookChilaquiles();
const printOrder = async() => {
    const order1 = await cowboyEggs();
    const order2 = await cookMolletes();
    const order3 = await cookChilaquiles();
    console.log(order1);
    console.log(order2);
    console.log(order3);
}
printOrder()