const carObject = {
        chassis: {
            headliners: false,
            assembly: false,
        },
        body: {
            doors: false,
            windows: 0,
            sanding: false,
            paintColor: '',
            wheels: 0,
        },
        prepareToSell: {
            fuel: 0,
            /* prepare to sell */
            oil: 0,
            /* prepare to sell */
            clean: false,
            /* prepare to sell */
            location: 'factory',
            /* send to the agency */
        },
        onTheAgency: {
            inventoried: false,
            /*   receive on the agency */
            exhibited: false,
            /*  receive on the agency */
        },
    }
    //putting the chassis
const car1BuildChassis = (callChassis) => {
    callChassis()
}
const buildChassisAction = async() => {
        console.log('car 1: Chassis:started to prepare');
        const car = {}
        const carElements = carObject.chassis
        const addHeadliners = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElements.headliners === false) {
                        const result = `headliners:${carElements.headliners = true}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('headliners cannot be added')
                    }
                }, 1000)

            })
        }
        const assemblyCar = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElements.assembly === false) {
                        let result = `assembly:${carElements.assembly = true}`;
                        console.log('Chassis assembled! ');
                        result = Object.entries(carObject.chassis)
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('chassis cannot be assembled')
                    }
                }, 2000)
            })
        }
        try {
            const headlinersAdded = await addHeadliners(car);
            return await assemblyCar(headlinersAdded);
        } catch (error) {
            console.log('an error ocurred:', error);
        }

    }
    // car1BuildChassis(buildChassisAction)
    //adding the body: 
const car1BuildBody = (callBody) => {
    callBody()
}
const buildBodyAction = async() => {
        console.log('car 1: Body started to prepare');
        const car = {}
        const carElementsBody = carObject.body
        const addDoors = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsBody.doors === false) {
                        const result = `doors:${carElementsBody.doors = true}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('doors cannot be added')
                    }
                }, 1000)

            })
        }
        const addWindows = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsBody.windows === 0) {
                        const result = `windows:${carElementsBody.windows = 4}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('windows cannot be added')
                    }
                }, 1000)

            })
        }
        const addSanding = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsBody.sanding === false) {
                        const result = `sanding:${carElementsBody.sanding = true}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('sanding cannot be added')
                    }
                }, 1000)

            })
        }
        const addPaintColor = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsBody.paintColor === '') {
                        const result = `paint color:${carElementsBody.paintColor = 'red'}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('paint color cannot be added')
                    }
                }, 1000)

            })
        }
        const addWheels = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsBody.wheels === 0) {
                        let result = `wheels:${carElementsBody.wheels = 4}`;
                        console.log('Assembled Bodywork! ');
                        result = Object.entries(carObject.body)
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('wheels cannot be added')
                    }
                }, 1000)

            })
        }
        try {
            const doorsAdded = await addDoors(car);
            const windowsAdded = await addWindows(doorsAdded);
            const sandingAdded = await addSanding(windowsAdded);
            const paintColorAdded = await addPaintColor(sandingAdded);
            return await addWheels(paintColorAdded);
        } catch (error) {
            console.log('an error ocurred:', error);
        }
    }
    // car1BuildBody(buildBodyAction)
    //preparing the sell
const car1PrepareToSell = (callPrepareToSell) => {
    callPrepareToSell()
}
const prepareToSellAction = async() => {
        console.log('car 1: Preparing to sell');
        const car = {}
        const carElementsToSell = carObject.prepareToSell
        const addFuel = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsToSell.fuel === 0) {
                        let result = `fuel:${carElementsToSell.fuel = true}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('fuel cannot be added')
                    }
                }, 1000)

            })
        }
        const addOil = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsToSell.oil === 0) {
                        let result = `oil:${carElementsToSell.oil = true}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('oil cannot be added')
                    }
                }, 1000)

            })
        }
        const cleanCar = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsToSell.clean === false) {
                        let result = `clean:${carElementsToSell.clean = true}`;
                        console.log(result);
                        console.log('Car 1: Car is ready to sent to the agency!');
                        result = Object.entries(carObject.prepareToSell)
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('car cannot be cleaned')
                    }
                }, 1500)

            })
        }
        const sendingToAgency = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsToSell.location === 'factory') {
                        let result = carElementsToSell.location = 'agency'
                        console.log('Car: arrived to the agency!');
                        result = Object.entries(carObject.prepareToSell)
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('car cannot be sent to the agency')
                    }
                }, 4000)

            })
        }
        try {
            const fuelAdded = await addFuel(car);
            const oilAdded = await addOil(fuelAdded);
            const carCleaned = await cleanCar(oilAdded);
            return await sendingToAgency(carCleaned)

        } catch (error) {
            console.log('an error ocurred:', error);
        }
    }
    // car1PrepareToSell(prepareToSellAction)
    // car received to the agency
const car1ReceivedToAgency = (callReceivedToAgency) => {
    callReceivedToAgency()
}
const receivedToAgencyAction = async() => {
        console.log('car 1: Now on the agency!');
        const car = {}
        let objectCar = carObject
        const carElementsToAgency = carObject.onTheAgency
        const isItInventoried = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsToAgency.inventoried === false) {
                        let result = `inventoried:${carElementsToAgency.inventoried = true}`;
                        console.log(result);
                        resolve(result)
                    } else {
                        reject('car cannot be inventoried')
                    }
                }, 1000)

            })
        }
        const isInExhibition = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carElementsToAgency.exhibited === false) {
                        let result = `exhibition:${carElementsToAgency.exhibited = true}`;
                        console.log(result);
                        result = Object.entries(carObject.onTheAgency)
                        console.log(result);
                        console.log('Car 1: Car is now on exhibition and completed!:');
                        resolve(result)
                    } else {
                        reject('car cannot be sent to the exhibition')
                    }
                }, 1000)
                setTimeout(() => {
                    console.log('All features:');
                    objectCar = Object.entries(carObject)
                    console.log(objectCar);
                }, 5000);

            })
        }
        try {
            const carInventoried = await isItInventoried(car);
            return await isInExhibition(carInventoried)
        } catch (error) {
            console.log('an error ocurred:', error);
        }
    }
    // car1ReceivedToAgency(receivedToAgencyAction)
    // imprinting all the assembly prcocess: 
const car1Imprinting = async() => {
    const car1BuildChassis = (buildChassisAction)
    const car1BuildBody = (buildBodyAction)
    const car1PrepareToSell = (prepareToSellAction)
    const car1ReceivedToAgency = (receivedToAgencyAction)
    try {
        const car1ChassisImprinted = await car1BuildChassis(buildChassisAction)
        const car1BodyImprinted = await car1BuildBody(car1ChassisImprinted)
        const car1PreparedToSell = await car1PrepareToSell(car1BodyImprinted)
        return await car1ReceivedToAgency(car1PreparedToSell)
    } catch (error) {
        console.log('an error ocurred:', error);
    }
}
car1Imprinting()