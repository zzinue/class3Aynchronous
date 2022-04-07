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
const randomTime = () => Math.random() * (3000 - 1000) + 1000;
//Assembling the chassis:
const buildChassisAction = async() => {
        const car = ''
        const carElements = carObject.chassis
        const addHeadliners = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (!carElements.headliners) ? result = `headliners:${carElements.headliners = true}`: reject('headliners cannot be added')
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })
        }
        const assemblyCar = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElements.assembly === false) ? result = `assembly:${carElements.assembly = true}`: reject('assembly cannot be added')
                    console.log(result);
                    let resultObject = Object.entries(carObject.chassis)
                    console.log(resultObject);
                    resolve(result)
                }, randomTime())
            })
        }
        try {
            const headlinersAdded = await addHeadliners(car);
            return await assemblyCar(headlinersAdded);
        } catch (error) {
            console.log('an error ocurred:', error);
        }
    }
    //Assembling the bodyWork:
const buildBodyWorkAction = async() => {
        console.log('BodyWork started to prepare');
        const car = {}
        const carElementsBody = carObject.body
        const addDoors = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsBody.doors === false) ? result = `doors:${carElementsBody.doors = 4}`: reject('doors cannot be added')
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })
        }
        const addWindows = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsBody.windows === 0) ? result = `windows:${carElementsBody.windows = 4}`: reject('windows cannot be added')
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })
        }
        const addSanding = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsBody.sanding === false) ? result = `sanding:${carElementsBody.sanding = true}`: reject('sanding cannot be added')
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })
        }
        const addPaintColor = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsBody.paintColor === '') ? result = `paint color:${carElementsBody.paintColor = 'painted'}`: reject('paint color cannot be added')
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })
        }
        const addWheels = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsBody.wheels === 0) ? result = `wheels:${carElementsBody.wheels = 4}`: reject('wheels cannot be added')
                    console.log(`wheels:${carElementsBody.wheels}`);
                    result = Object.entries(carObject.body)
                    console.log(result);
                    resolve(result)
                }, randomTime())
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
    //Preparing to Sell:
const prepareToSellAction = async() => {
        const car = {}
        const carElementsToSell = carObject.prepareToSell
        const addFuel = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsToSell.fuel === 0) ? result = `fuel:${carElementsToSell.fuel = 'Full'}`: reject('fuel cannot be added')
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })
        }
        const addOil = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsToSell.oil === 0) ? result = `oil:${carElementsToSell.oil = 'Full'}`: reject('oil cannot be added')
                    console.log(result);
                    resolve(result)
                }, randomTime())

            })
        }
        const cleanCar = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsToSell.clean === false) ? result = `clean:${carElementsToSell.clean = true}`: reject('clean cannot be added')
                    console.log('Car is clean and ready to sent to the agency!');
                    result = Object.entries(carObject.prepareToSell)
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })

        }
        const sendingToAgency = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsToSell.location === 'factory') ? result = carElementsToSell.location = 'agency': reject('location cannot be added')
                    console.log('Car arrived to the agency!');
                    result = Object.entries(carObject.prepareToSell)
                    console.log(result);
                    resolve(result)
                }, randomTime())
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
    // Car received on the agency: 
const receivedToTheAgencyAction = async() => {
        console.log('Now on the agency!');
        const car = {}
        let objectCar = carObject
        const carElementsToAgency = carObject.onTheAgency
        const isItInventoried = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsToAgency.inventoried === false) ? result = `inventoried:${carElementsToAgency.inventoried = true}`: reject('Car not yet inventoried')
                    console.log(result);
                    resolve(result)
                }, randomTime())
            })
        }
        const isInExhibition = (car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (carElementsToAgency.exhibited === false) ? result = `exhibition:${carElementsToAgency.exhibited = true}`: reject('Car not yet exhibited')
                    console.log(result);
                    result = Object.entries(carObject.onTheAgency)
                    console.log(result);
                    console.log('Car is now on exhibition and completed!:');
                    resolve(result)
                }, randomTime())
                setTimeout(() => {
                    console.log('\n All features:');
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
    //process complete and integrated:
const carBuiltEntireProcess = async(cardNumber) => {
        const chassisBuilt = await buildChassisAction();
        console.log(`Chasis ${cardNumber} built!`);
        const bodyWorkBuile = await buildBodyWorkAction(chassisBuilt)
        console.log(`Body work ${cardNumber} built!`);
        const preparedToSell = await prepareToSellAction(bodyWorkBuile)
        console.log(`Car ${cardNumber} is preparing to sell!`);
        const readyToSell = await receivedToTheAgencyAction(preparedToSell)
        console.log(`Car ${cardNumber} is on exhibition`, );
    }
    //function to sell many cars: 
const buildManyCars = (numberOfCars) => {
    while (numberOfCars > 0) {
        carBuiltEntireProcess(numberOfCars);
        --numberOfCars;
    }
};
buildManyCars(2)