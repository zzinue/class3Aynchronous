const randomTime = () => Math.random() * (3000 - 1000) + 1000;
//Assembling the chassis:
const buildChassisAction = async() => {
        const chassis = {
            headliners: false,
            assembly: false,
        }
        const addHeadliners = (chassis) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (!chassis.headliners) ? chassis.headliners = true: reject('headliners cannot be added')
                    console.log('headliners added');
                    resolve(chassis)
                }, randomTime())
            })
        }
        const assembleCar = (chassis) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (chassis.headliners) ? chassis.assembly = true: reject('assembly cannot be added')
                    console.log('chassis assembled');
                    resolve(chassis)
                }, randomTime())
            })
        }
        try {
            console.log('adding headliners to the Chassis...');
            const headlinersAdded = await addHeadliners(chassis);
            console.log('assembling Chassis...');
            return await assembleCar(headlinersAdded);
        } catch (error) {
            console.log('an error ocurred:', error);
        }
    }
    // buildChassisAction()
const buildBodyworkAction = async(doors, color) => {
        const addingDoors = (doors) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (doors > 0 && doors <= 4) {
                        const bodyWork = { doors }
                        console.log('doors added');
                        resolve(bodyWork)
                    } else {
                        reject('doors cannot be added')
                    }
                }, randomTime())
            })
        }
        const paintCar = (bodyWork, color) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (bodyWork.doors > 0) ? bodyWork.color = color: reject('paint cannot be added')
                    console.log('car painted');
                    resolve(bodyWork)
                }, randomTime())
            })
        }
        const puttingWheels = (bodyWork) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    (bodyWork.color != '') ? bodyWork.wheels = 4: reject('wheels cannot be added')
                    console.log('wheels added to the car');
                    resolve(bodyWork)
                }, randomTime())
            })
        }
        try {
            console.log('adding doors the the bodyWork...');
            const doorsAdded = await addingDoors(doors);
            console.log('adding paint to the bodyWork...');
            const paintAdded = await paintCar(doorsAdded, color);
            console.log('adding wheels to the bodyWork...');
            return await puttingWheels(paintAdded);
        } catch (error) {
            console.log('car was not being assembled:', error);
        }
    }
    // buildBodyworkAction()
const prepareToSentToAgency = async(car) => {
    car.gas = 0;
    car.oil = 0;
    const fillWithGasoline = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                (car.gas < 0.5) ? car.gas = 100: reject('gasoline cannot be added')
                console.log("Fuel:full");
                resolve(car);
            }, randomTime());
        });
    };
    const fillWithOil = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                (car.oil < 0.5) ? car.oil = 100: reject('gasoline cannot be added')
                console.log("Oil:full");
                resolve(car);
            }, randomTime());
        });
    }

    const sendingTheCar = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.gas > 0 && car.oil > 0) {
                    car.location = "Agency";
                    console.log("Car sent to the agency");
                    resolve(car);
                } else reject('car cannot be sent to the agency')
            }, randomTime());
        });
    }
    try {
        console.log("Loading the car with gasoline...");
        const gasolineAdded = await fillWithGasoline(car);
        console.log("Loading the car with oil...");
        const oilAdded = await fillWithOil(gasolineAdded);
        console.log("Sending the car to the agency...");
        return await sendingTheCar(oilAdded);
    } catch (error) {
        console.log("Car was not sent:", error);
    }
}
const carForSale = async(car) => {
    const carClean = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.location = "Agency") {
                    console.log("Cleaning Car")
                    car.clean = true
                    resolve(car);
                } else reject('car cannot be cleaned')
            }, randomTime());
        });
    };
    const carPuttingOnExhibition = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.location === "Agency") {
                    console.log("Putting on exhibition")
                    car.exhibited = true;
                    resolve(car);
                } else reject("Car cannot be put on exhibition");
            }, randomTime());
        });
    };
    try {
        const carCleaned = await carClean(car);
        return await carPuttingOnExhibition(carCleaned);
    } catch (error) {
        console.log("Car cannot be exhibited:", error);
    }
}
const BuildCArWholeProcess = async(carNumber) => {
        const car = {}
        car.chassis = await buildChassisAction();
        console.log(`Chassis ${carNumber} finished`);
        car.bodyWork = await buildBodyworkAction(4, 'blue');
        console.log(`Car: ${carNumber} finished`);
        const sentCartToAgency = await prepareToSentToAgency(car);
        console.log(`Car ${carNumber} sent to the agency`);
        const carExhibited = await carForSale(sentCartToAgency);
        console.log(`Car ${carNumber} reeady to sell`, carExhibited);
    }
    // BuildCArWholeProcess('BMW');
const buildManyCarsSameTime = (numberOfCars) => {
    while (numberOfCars > 0) {
        BuildCArWholeProcess(numberOfCars);
        numberOfCars--;
    }
}
buildManyCarsSameTime(10)