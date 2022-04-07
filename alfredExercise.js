const randomTime = () => Math.random() * (5000 - 1000) + 1000;

const buildChasis = async() => {
    const chasis = {
        vest: false,
        assembly: false,
    };
    const addVest = (chasis) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!chasis.vest) {
                    chasis.vest = true;
                    console.log("Vestidura añadida al chasis");
                    resolve(chasis);
                } else {
                    reject("No se pudo añadir la vestidura");
                }
            }, randomTime());
        });
    };

    const assemble = (chasis) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (chasis.vest) {
                    chasis.assembly = true;
                    console.log("Chasis ensamblado");
                    resolve(chasis);
                } else {
                    reject("No se puede ensamblar sin la vestidura");
                }
            }, randomTime());
        });
    };

    try {
        console.log("Añadiendo vestidura al chasis...");
        const vestedChasis = await addVest(chasis);
        console.log("Ensamblando chasis...");
        return await assemble(vestedChasis);
    } catch (error) {
        console.error("No se pudo ensamblar el chasis:", error);
    }
};

const buildBodywork = async(doors, color) => {
    const placeDoors = (doors) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (doors > 0 && doors <= 4) {
                    const bodyWork = { doors };
                    console.log("Puertas añadidas al carro");
                    resolve(bodyWork);
                } else {
                    reject(`No se puede añadir ${doors} puertas`);
                }
            }, randomTime());
        });
    };

    const paint = (bodyWork, color) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (bodyWork.doors > 0) {
                    bodyWork.color = color;
                    console.log("Carro pintado");
                    resolve(bodyWork);
                } else {
                    reject(`No se pudo pintar ${bodyWork}`);
                }
            }, randomTime());
        });
    };

    const placeWheels = (bodyWork) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (bodyWork.color != "") {
                    bodyWork.wheels = 4;
                    console.log("Ruedas añadidas al carro");
                    resolve(bodyWork);
                } else {
                    reject(`No se pudo colocar las llantas a ${bodyWork}`);
                }
            }, randomTime());
        });
    };

    try {
        console.log("Añadiendo puertas al carro...");
        const bodyworkWithDoors = await placeDoors(doors);
        console.log("Pintando el carro...");
        const paintedBodywork = await paint(bodyworkWithDoors, color);
        console.log("Añadiendo ruedas al carro...");
        return await placeWheels(paintedBodywork);
    } catch (error) {
        console.error("No se pudo ensamblar el carro:", error);
    }
};

const prepareToSend = async(car) => {
    car.gas = 0;
    car.oil = 0;

    const fillGasoline = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.gas < 0.5) {
                    car.gas = 100;
                    console.log("Gasolina llenada");
                    resolve(car);
                } else {
                    reject("No se pudo añadir gasolina");
                }
            }, randomTime());
        });
    };

    const fillOil = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.oil < 0.5) {
                    car.oil = 100;
                    console.log("Aceite llenado");
                    resolve(car);
                } else {
                    reject("No se pudo añadir aceite");
                }
            }, randomTime());
        });
    };

    const sendCar = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.gas > 0 && car.oil > 0) {
                    car.location = "Agencia";
                    console.log("Carro enviado");
                    resolve(car);
                } else {
                    reject("No se pudo enviar el carro");
                }
            }, randomTime());
        });
    };

    try {
        console.log("Añadiendo gasolina al carro...");
        const carWithFuel = await fillGasoline(car);
        console.log("Añadiendo aceite al carro...");
        const carWithOil = await fillOil(carWithFuel);
        console.log("Enviando el carro a la agencia...");
        return await sendCar(carWithOil);
    } catch (error) {
        console.error("No se pudo enviar el carro", error);
    }
};

const prepareForSale = async(car) => {
    const cleanCar = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.location == "Agencia") {
                    console.log("Limpiando el carro");
                    car.clean = true;
                    resolve(car);
                } else {
                    reject("No se pudo limpiar el carro");
                }
            }, randomTime());
        });
    };

    const exhibitCar = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (car.location === "Agencia") {
                    console.log("Exhibiendo el carro en la tienda");
                    car.exhibido = true;
                    resolve(car);
                } else {
                    reject("No se pudo exhibir el carro");
                }
            }, randomTime());
        });
    };

    try {
        const carCleaned = await cleanCar(car);
        return await exhibitCar(carCleaned);
    } catch (error) {
        console.error("No se pudo preparar el carro", error);
    }
};

const buildCar = async(carNumber) => {
    const car = {};
    car.chasis = await buildChasis();
    console.log(`Chasis ${carNumber} completado`);

    car.bodyWork = await buildBodywork(4, "Azul");
    console.log(`Carro ${carNumber} completo`);

    const carSent = await prepareToSend(car);
    console.log(`Carro ${carNumber} enviado a la agencia`);

    const completedCar = await prepareForSale(carSent);
    console.log(`Carro ${carNumber} listo para vender: `, completedCar);
};

const buildCars = (numberOfCars) => {
    while (numberOfCars > 0) {
        buildCar(numberOfCars);
        --numberOfCars;
    }
};

buildCars(10);