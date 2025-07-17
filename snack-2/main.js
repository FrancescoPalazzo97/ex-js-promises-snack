// function lanciaDado() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() <= 0.2) reject(`Il dado si è incastrato`);
//             const value = Math.floor(Math.random() * 6) + 1;
//             resolve(value);
//         }, 3000)
//     })
// }

// for (let i = 0; i < 30; i++) {
//     lanciaDado()
//         .then(value => console.log(`È uscita la faccia con il numero ${value}`))
//         .catch(err => console.error(err))
// }

//BONUS 

function creaLanciaDado() {
    let memorizzaUltimoLancio = 0;
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() <= 0.2) {
                    memorizzaUltimoLancio = 0;
                    reject(`Il dado si è incastrato`);
                }
                const value = Math.floor(Math.random() * 6) + 1;
                if (value === memorizzaUltimoLancio) {
                    resolve(`Incredibile è uscito di nuovo ${value}`);
                }
                memorizzaUltimoLancio = value
                resolve(`È uscita la faccia con il numero ${value}`);
            }, 3000)
        })
    }
}

const lanciaDado = creaLanciaDado();
for (let i = 0; i < 30; i++) {
    lanciaDado()
        .then(value => console.log(value))
        .catch(err => console.error(err))
}