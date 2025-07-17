function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() <= 0.2) reject(`Il dado si è incastrato`);
            const value = Math.floor(Math.random() * 6) + 1;
            resolve(value);
        }, 3000)
    })
}

for (let i = 0; i < 30; i++) {
    lanciaDado()
        .then(value => console.log(`È uscita la faccia con il numero ${value}`))
        .catch(err => console.error(err))
}