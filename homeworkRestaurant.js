   //eggs
   //open eggs
   const cookEggs = async() => {
           const ingredientEggs = 'eggs'
           const openEggs = (ingredientEggs) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientEggs === 'eggs') {
                               const result = `open ${ingredientEggs}`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject('eggs cannot be opened')
                           }
                       }, 1000)
                   })
               }
               //fry eggs
           const fryEggs = (ingredientEggs) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientEggs === `open eggs`) {
                               const result = `fried eggs`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject('Eggs cannot be fried')
                           }
                       }, 2000)
                   })
               }
               //put sauce
           const putSauace = (ingredientEggs) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientEggs === 'fried eggs') {
                               const result = `adding souce`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject('this sauce cannot be added')
                           }
                       }, 2000)
                   })
               }
               //serve them 
           const serveEggs = (ingredientEggs) => {
               return new Promise((resolve, reject) => {
                   setTimeout(() => {
                       if (ingredientEggs === 'adding souce') {
                           const result = `eggs served!`;
                           console.log(result);
                           resolve(result)
                       } else {
                           reject('eggs cannot be served')
                       }
                   }, 2000)
               })
           }
           try {
               const eggsOpened = await openEggs(ingredientEggs);
               const eggsFried = await fryEggs(eggsOpened);
               const addeSauce = await putSauace(eggsFried);
               return await serveEggs(addeSauce);
           } catch (error) {
               console.log('an error ocurred:', error);
           }

       }
       //    cookEggs()
       //Molletes activites:
       //slice the bread
   const cookMolletes = async() => {
           const ingredientMojettes = 'bread';
           const sliceBread = (ingredientMojettes) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientMojettes === 'bread') {
                               const result = `slice ${ingredientMojettes}`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject(' bread cannot be sliced')
                           }
                       }, 1000)
                   })
               }
               //put frijoles
           const putFrijoles = (ingredientMojettes) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientMojettes === 'slice bread') {
                               const result = `put frijoles`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject(' frijoles cannot be put')
                           }
                       }, 1000)
                   })
               }
               //put cheese
           const putCheese = (ingredientMojettes) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientMojettes === 'put frijoles') {
                               const result = `put cheese`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject(' cheese cannot be put')
                           }
                       }, 2000)
                   })
               }
               //bake mojettes
           const bakeMolletes = (ingredientMojettes) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientMojettes === 'put cheese') {
                               const result = `bake mojettes`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject('Mojettes cannot be baked')
                           }
                       }, 3000)
                   })
               }
               //serve the mojetes 
           const serveMolletes = (ingredientMojettes) => {
               return new Promise((resolve, reject) => {
                   setTimeout(() => {
                       if (ingredientMojettes === 'bake mojettes') {
                           const result = `mojettes served!`;
                           console.log(result);
                           resolve(result)
                       } else {
                           reject('mojettes cannot be served')
                       }
                   }, 1000)
               })
           }
           try {
               const breadSliced = await sliceBread(ingredientMojettes);
               const frijolesSpreaded = await putFrijoles(breadSliced);
               const cheeseSpreaded = await putCheese(frijolesSpreaded);
               const mojettesBaked = await bakeMolletes(cheeseSpreaded);
               return await serveMolletes(mojettesBaked);
           } catch (error) {
               console.log('an error ocurred:', error);
           }
       }
       //    cookMolletes()

   //chilaquiles activities
   //put tortilla to the pan
   const cookChilaquiles = async() => {
           const ingredientTortilla = 'tortilla'
           const putTortilla = (ingredientTortilla) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientTortilla === 'tortilla') {
                               const result = `put ${ingredientTortilla}`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject('tortilla cannot be put')
                           }
                       }, 1000)
                   })
               }
               //put souce
           const putSauce = (ingredientTortilla) => {
                   return new Promise((resolve, reject) => {
                       setTimeout(() => {
                           if (ingredientTortilla === 'put tortilla') {
                               const result = `put sauce`;
                               console.log(result);
                               resolve(result)
                           } else {
                               reject('sauce cannot be put')
                           }
                       }, 2000)
                   })
               }
               //serve the chilaquiles
           const serveChilaquiles = (ingredientTortilla) => {
               return new Promise((resolve, reject) => {
                   setTimeout(() => {
                       if (ingredientTortilla === 'put sauce') {
                           const result = `chilaquiles served!`;
                           console.log(result);
                           resolve(result)
                       } else {
                           reject('chilaquiles cannot be served')
                       }
                   }, 1000)
               })
           }
           try {
               const tortillaPut = await putTortilla(ingredientTortilla);
               const saucePut = await putSauce(tortillaPut);
               return await serveChilaquiles(saucePut);
           } catch {
               console.log('an error ocurred:', error);
           }

       }
       //    cookChilaquiles()

   const order1 = cookEggs()
   const order2 = cookMolletes()
   const order3 = cookChilaquiles()
   const printOrder = async() => {
       const order1 = await cookEggs()
       const order2 = await cookMolletes()
       const order3 = await cookChilaquiles()
           //    console.log(order1)
           //    console.log(order2)
           //    console.log(order3)
   }
   printOrder()